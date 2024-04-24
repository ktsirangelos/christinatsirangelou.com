import { useEffect, memo } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";
import { projects, ProjectType } from "./Work.data";
import "./Work.scss";
import { useState } from "react";

type ProjectCategoriesProps = {
  filterProjectsByCategory: (category: string) => void;
};

type ProjectsAccordionProps = {
  projects: ProjectType[];
  selectedCategory: string;
};

const WorkHeader = () => {
  return (
    <header className="page-header">
      <h2>
        The practice delivers a wide spectrum of design services in the field of
        spatial design, such as Architectural design for New buildings and
        Interior projects, as well as Product design and Creative consultancy.
      </h2>
    </header>
  );
};

const categories = [
  "all",
  "architecture",
  "interior",
  "product",
  "research",
  "exhibition",
  "education",
];

const ProjectCategories = memo(
  ({ filterProjectsByCategory }: ProjectCategoriesProps) => (
    <ul className="work-categories">
      {categories.map((category) => (
        <li key={category} className={category.slice(0, 3)}>
          <button onClick={() => filterProjectsByCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  ),
);

const ProjectsAccordion = memo(
  ({ projects, selectedCategory }: ProjectsAccordionProps) => {
    return (
      <Accordion>
        {projects.map(
          (
            {
              title,
              type,
              year,
              location,
              client,
              status,
              size,
              category,
              pictures,
            },
            id,
          ) => (
            <AccordionItem
              header={
                <>
                  <div className="title">{title}</div>
                  <div className="type">{type}</div>
                  <div className="year">{year}</div>
                </>
              }
              key={id}
              className={
                selectedCategory !== "all" && category !== selectedCategory
                  ? "inactive"
                  : ""
              }
            >
              <div className="accordion-item-container">
                {pictures.map((picture) => (
                  <Link key={picture.id} to={`/work/${title}`}>
                    <picture>
                      <source
                        media="(min-width: 112.5em)"
                        srcSet={picture.srcDesktop}
                      />
                      <source
                        media="(min-width: 75em)"
                        srcSet={picture.srcLaptop}
                      />
                      <img
                        src={picture.srcMobile}
                        alt={`Landing ${picture.id}`}
                      />
                    </picture>
                  </Link>
                ))}
                <div className="description">
                  <div className="details">
                    <div className="location">Location: {location}</div>
                    <div className="client">Client: {client}</div>
                    <div className="status">Status: {status}</div>
                    <div className="size">Size: {size} sqm</div>
                  </div>
                  <div className="explore">
                    <Link to={`/work/${title}`} key={`${title}-explore`}>
                      Explore
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AccordionItem>
          ),
        )}
      </Accordion>
    );
  },
);

const WorkMain = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categorizedProjects, setCategorizedProjects] =
    useState<ProjectType[]>(projects);

  const filterProjectsByCategory = (category: string) => {
    setSelectedCategory(category);

    const sortedProjects = [...projects].sort((a, b) => {
      if (a.category === category && b.category !== category) {
        return -1;
      }
      if (a.category !== category && b.category === category) {
        return 1;
      }

      const yearA = parseInt(a.year.split("-")[0], 10);
      const yearB = parseInt(b.year.split("-")[0], 10);
      return yearB - yearA;
    });

    setCategorizedProjects(sortedProjects);
  };

  useEffect(() => {
    filterProjectsByCategory("all");
  }, []);

  return (
    <main className="page-main" style={{ marginBottom: "50vh" }}>
      <section className="works">
        <div className="categories-filter">
          <ProjectCategories
            filterProjectsByCategory={filterProjectsByCategory}
          />
        </div>
        <div className="projects-accordion">
          <ProjectsAccordion
            projects={categorizedProjects}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </main>
  );
};

const Work = () => {
  return (
    <>
      <WorkHeader />
      <WorkMain />
    </>
  );
};

export { Work };
