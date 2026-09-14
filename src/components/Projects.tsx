import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Section Command */}
      <p className="section-command">&gt; OPEN PROJECTS.DIR</p>

      {/* Project Grid */}
      <div className="projects-grid">
        <ProjectCard
          number="01"
          title="ROADRUNNERS.EXE"
          technologies="Kotlin / Android / SQL / Location APIs"
          description="Android application that tracks runs, distance, speed, average speed, and stores previous runs."
          githubUrl="https://github.com/chrislff02/RoadRunners"
        />

        <ProjectCard
          number="02"
          title="PREMIER_LEAGUE_PREDICTOR.PY"
          technologies="Python / Pandas / Machine Learning"
          description="Machine learning project that uses historical football data to predict Premier League match outcomes."
          githubUrl="https://github.com/chrislff02/Premier-League-Predictor"
        />

        <ProjectCard
          number="03"
          title="ALGORITHM_VISUALIZER.TSX"
          technologies="React / TypeScript / Vite / CSS"
          description="Interactive web application for visualizing common computer science algorithms step by step."
          viewProject="https://algorithm-visualizer-one-gamma.vercel.app/"
          githubUrl="https://github.com/chrislff02/algorithm-visualizer"
        />

        <ProjectCard
          number="04"
          title="BLACKJACK.JAVA"
          technologies="Java"
          description="Console-based Blackjack game featuring betting, money management, card drawing, and dealer gameplay."
          githubUrl="https://github.com/chrislff02/BlackJack-java"
        />

        <ProjectCard
          number="05"
          title="FLAPPY_BIRD.AI"
          technologies="JavaScript / HTML / CSS / NEAT / Neural Networks"
          description="Flappy Bird-style game featuring human gameplay and an AI agent evolved using a custom NEAT implementation."
          viewProject="https://flappy-bird-ai-seven.vercel.app/"
          githubUrl="https://github.com/chrislff02/flappy-bird-ai"
        />

        <ProjectCard
          number="06"
          title="PERSONAL-FINANCE-DASHBOARD.APP"
          technologies="TypeScript / Python / CSS / JavaScript / HTML"
          description="Full-stack finance dashboard for tracking transactions, spending, and financial trends."
          viewProject="https://personal-finance-dashboard-iota-six.vercel.app/"
          githubUrl="https://github.com/chrislff02/personal-finance-dashboard"
        />
      </div>
    </section>
  );
}

export default Projects;
