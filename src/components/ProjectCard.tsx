type ProjectCardProps = {
  number: string;
  title: string;
  technologies: string;
  description: string;
  viewProject?: string; // Property is optional
  githubUrl: string;
};

function ProjectCard({
  number,
  title,
  technologies,
  description,
  viewProject,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {/* Project Number */}
      <p className="project-number">[{number}]</p>

      {/* Project Information */}
      <h2>{title}</h2>

      <p className="project-tech">{technologies}</p>

      <p className="project-description">{description}</p>

      {/* Project Links */}
      <div className="project-buttons">
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
  );
}

export default ProjectCard;
