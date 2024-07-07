import { useParams } from "react-router-dom";
import { projects, ProjectType } from "../work/Work.data";
import { ProjectNotFound } from "../404/NotFound";
import "./Project.scss";

const ProjectHeader = ({ project }: { project: ProjectType }) => (
  <header className="page-header">
    <h2>
      {project.title}, {project.type} <br />
      {project.year}
    </h2>
  </header>
);

const ProjectContent = ({ project }: { project: ProjectType }) => {
  const { pictures, texts, credits } = project.projectPageData;

  const imageElements = pictures.map((picture) => (
    <picture key={picture.id} className={picture.id}>
      <source media="(min-width: 112.5em)" srcSet={picture.srcDesktop} />
      <source media="(min-width: 75em)" srcSet={picture.srcLaptop} />
      <img src={picture.srcMobile} alt={`Landing ${picture.id}`} />
    </picture>
  ));

  const textElements = Object.entries(texts).map(([className, text], index) => (
    <p key={index} className={className}>
      {text}
    </p>
  ));

  const renderCredits = () => {
    const rows = [];

    for (const [key, value] of Object.entries(credits)) {
      if (Array.isArray(value)) {
        value.forEach((val, index) => {
          rows.push(
            <tr key={`${key}-${index}`}>
              <td>{index === 0 ? key : ""}</td>
              <td>{val}</td>
            </tr>,
          );
        });
      } else {
        rows.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>,
        );
      }
    }

    return <tbody>{rows}</tbody>;
  };

  return (
    <>
      {imageElements}
      {textElements}
      <table className="credits">{renderCredits()}</table>
    </>
  );
};

const ProjectMain = ({ project }: { project: ProjectType }) => (
  <main className="project-main">
    <ProjectContent project={project} />
  </main>
);

export const Project = () => {
  const { projectTitle } = useParams();
  const project = projects.find((project) => project.title === projectTitle);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectMain project={project} />
    </>
  );
};
