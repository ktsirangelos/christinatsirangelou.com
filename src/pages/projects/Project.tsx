import { useParams } from "react-router-dom";
import { projects, ProjectType } from "../work/Work.data";
import "./Project.scss";

const ProjectHeader = ({ project }: { project: ProjectType }) => (
  <header className="page-header">
    <p>
      {project.title}, {project.type} <br />
      {project.year}
    </p>
  </header>
);

const ProjectContent = ({ project }: { project: ProjectType }) => {
  const { pictureURLs, text1, text2, credits } = project.projectPage;

  const imageElements = Object.entries(pictureURLs).map(
    ([className, url], index) => (
      <div key={className} className={className}>
        <img src={url} alt={`${project.title}-${index + 1}`} />
      </div>
    ),
  );

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
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
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
    return (
      <main className="page-main">
        <section className="not-found">
          <p>Project Not Found</p>
        </section>
      </main>
    );
  }

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectMain project={project} />
    </>
  );
};
