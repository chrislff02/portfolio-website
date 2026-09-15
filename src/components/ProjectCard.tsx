import { useEffect, useState } from "react";

type MoreInfo = {
  overview: string;
  challenges?: string[];
  learned?: string;
  improvements?: string[];
};

type ProjectCardProps = {
  number: string;
  title: string;
  technologies: string;
  description: string;
  moreInfo?: MoreInfo;
  viewProject?: string;
  githubUrl: string;
};

function ProjectCard({
  number,
  title,
  technologies,
  description,
  moreInfo,
  viewProject,
  githubUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    // Prevent the page behind the modal from scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="project-card">
        {/* Project Number */}
        <p className="project-number">[{number}]</p>

        {/* Project Information */}
        <h2>{title}</h2>

        <p className="project-tech">{technologies}</p>

        <p className="project-description">{description}</p>

        {/* Project Buttons */}
        <div className="project-buttons">
          {moreInfo && (
            <button
              type="button"
              className="retro-button"
              onClick={() => setIsModalOpen(true)}
            >
              MORE INFO
            </button>
          )}

          {viewProject && (
            <a
              href={viewProject}
              target="_blank"
              rel="noreferrer"
              className="retro-button"
            >
              VIEW PROJECT
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="retro-button"
          >
            GITHUB
          </a>
        </div>
      </div>

      {/* Project Information Modal */}
      {isModalOpen && moreInfo && (
        <div
          className="project-modal-overlay"
          onMouseDown={() => setIsModalOpen(false)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${number}`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="project-modal-header">
              <p>&gt; OPEN {title}.INFO</p>

              <button
                type="button"
                className="project-modal-close"
                aria-label="Close project information"
                onClick={() => setIsModalOpen(false)}
              >
                [X]
              </button>
            </div>

            {/* Modal Content */}
            <div className="project-modal-content">
              <h2 id={`project-modal-title-${number}`}>{title}</h2>

              <p className="project-modal-tech">{technologies}</p>

              <div className="project-modal-section">
                <h3>OVERVIEW</h3>
                <p>{moreInfo.overview}</p>
              </div>

              {moreInfo.challenges && (
                <div className="project-modal-section">
                  <h3>CHALLENGES</h3>

                  <ul>
                    {moreInfo.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {moreInfo.learned && (
                <div className="project-modal-section">
                  <h3>WHAT I LEARNED</h3>
                  <p>{moreInfo.learned}</p>
                </div>
              )}

              {moreInfo.improvements && (
                <div className="project-modal-section">
                  <h3>POSSIBLE IMPROVEMENTS</h3>

                  <ul>
                    {moreInfo.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
