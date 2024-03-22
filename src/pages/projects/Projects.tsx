import { useParams } from "react-router-dom";

export const Project = () => {
  const { projectTitle } = useParams();

  return (
    <div>
      <h1>Project Page</h1>
      <p>This is the project page for {projectTitle}.</p>
    </div>
  );
};
