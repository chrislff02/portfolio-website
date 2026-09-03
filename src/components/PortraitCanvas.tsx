import { useEffect, useRef } from "react";
import portrait from "../assets/portrait-source.png";

function PortraitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const image = new Image();
    image.src = portrait;

    image.onload = () => {
      const width = canvas.width;
      const height = canvas.height;

      context.clearRect(0, 0, width, height);

      /*
        Find boundaries of the transparent PNG
        so empty transparent space doesn't affect
        portrait's size/position
      */
      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = image.width;
      sourceCanvas.height = image.height;

      const sourceContext = sourceCanvas.getContext("2d");

      if (!sourceContext) return;

      sourceContext.clearRect(0, 0, image.width, image.height);
      sourceContext.drawImage(image, 0, 0);

      const sourceData = sourceContext.getImageData(
        0,
        0,
        image.width,
        image.height,
      ).data;

      let minX = image.width;
      let minY = image.height;
      let maxX = 0;
      let maxY = 0;
      let foundVisiblePixel = false;

      // Locate visible edges of the subject
      for (let y = 0; y < image.height; y++) {
        for (let x = 0; x < image.width; x++) {
          const index = (y * image.width + x) * 4;
          const alpha = sourceData[index + 3];

          if (alpha > 20) {
            foundVisiblePixel = true;

            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (!foundVisiblePixel) return;

      const contentWidth = maxX - minX + 1;
      const contentHeight = maxY - minY + 1;

      /*
        Draw cropped subject into a temporary canvas
        & scale it to fit portrait area
      */
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;

      const tempContext = tempCanvas.getContext("2d");

      if (!tempContext) return;

      tempContext.clearRect(0, 0, width, height);

      const scale = Math.min(
        (width * 0.82) / contentWidth,
        (height * 0.88) / contentHeight,
      );

      const drawWidth = contentWidth * scale;
      const drawHeight = contentHeight * scale;

      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2 + 8;

      tempContext.drawImage(
        image,
        minX,
        minY,
        contentWidth,
        contentHeight,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight,
      );

      // Get resized portrait's pixel data
      const imageData = tempContext.getImageData(0, 0, width, height);

      const pixels = imageData.data;

      /*
        Average brightness of nearby pixels,
        It smooths out unusually strong single pixels
        & helps prevent facial features becoming
        disproportionately bright
      */
      const getAverageBrightness = (px: number, py: number) => {
        let total = 0;
        let count = 0;

        for (let offsetY = -1; offsetY <= 1; offsetY++) {
          for (let offsetX = -1; offsetX <= 1; offsetX++) {
            const sampleX = Math.min(width - 1, Math.max(0, px + offsetX));

            const sampleY = Math.min(height - 1, Math.max(0, py + offsetY));

            const sampleIndex = (sampleY * width + sampleX) * 4;

            const red = pixels[sampleIndex];
            const green = pixels[sampleIndex + 1];
            const blue = pixels[sampleIndex + 2];
            const alpha = pixels[sampleIndex + 3];

            // Ignore transparent background pixels
            if (alpha < 20) {
              continue;
            }

            const sampleBrightness = red * 0.299 + green * 0.587 + blue * 0.114;

            total += sampleBrightness;
            count++;
          }
        }

        // Treat fully transparent areas = very bright
        if (count === 0) {
          return 255;
        }

        return total / count;
      };

      /*
        Redraw portrait with green dots
      */
      context.clearRect(0, 0, width, height);

      const spacing = 4;

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const index = (y * width + x) * 4;
          const alpha = pixels[index + 3];

          // Skip transparent pixels
          if (alpha < 20) {
            continue;
          }

          const brightness = getAverageBrightness(x, y);
          const alphaStrength = alpha / 255;

          // Normalized canvas position from 0 - 1
          const nx = x / width;
          const ny = y / height;

          // Approximate face/head region
          const isFaceZone = nx > 0.22 && nx < 0.78 && ny > 0.1 && ny < 0.58;

          // Darker pixels = stronger dots
          const darkness = (1 - brightness / 255) * alphaStrength;

          let radius = Math.max(0.45, darkness * 1.9);

          let opacity = Math.max(0.1, darkness * 0.9);

          // Emphasize facial details
          if (isFaceZone) {
            radius *= 1.1;
            opacity *= 1.12;
          }

          /*
            Gradually fade lower body so the suit
            doesn't overpower the face
          */
          const suitFadeStart = 0.52;
          const suitFadeEnd = 0.9;

          if (ny > suitFadeStart) {
            const fadeProgress = Math.min(
              1,
              (ny - suitFadeStart) / (suitFadeEnd - suitFadeStart),
            );

            radius *= 1 - fadeProgress * 0.15;
            opacity *= 1 - fadeProgress * 0.28;
          }

          /*
            Limit extremely strong dots around features
            = eyes/nostrils/hair/shadows
          */
          radius = Math.min(radius, 1.9);
          opacity = Math.min(opacity, 0.78);

          // Ignore dots that would be nearly invisible
          if (opacity < 0.08) {
            continue;
          }

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);

          context.fillStyle = `rgba(69, 245, 154, ${opacity})`;

          context.fill();
        }
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="portrait-canvas"
      width={440}
      height={440}
    />
  );
}

export default PortraitCanvas;
