import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";
import { projects } from "./Work.data";
import "./Work.scss";

const WorkHeader = () => {
  return (
    <header className="work-header">
      The practice delivers a wide spectrum of design services in the field of
      spatial design, such as Architectural design for New buildings and
      Interior projects, as well as Product design and Creative consultancy.
    </header>
  );
};

const ProjectCategories = () => {
  return (
    <ul className="project-categories">
      <li className="all">
        <button id="all">All</button>
      </li>
      <li className="arc">
        <button id="architecture">Architecture</button>
      </li>
      <li className="int">
        <button id="interior">Interior</button>
      </li>
      <li className="pro">
        <button id="product">Product</button>
      </li>
      <li className="res">
        <button id="research">Research</button>
      </li>
      <li className="exh">
        <button id="exhibition">Exhibition</button>
      </li>
      <li className="edu">
        <button id="education">Education</button>
      </li>
    </ul>
  );
};

const ProjectsAccordion = () => {
  return (
    <Accordion>
      {projects.map(
        (
          { title, type, year, location, client, status, size, pictureURLs },
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
          >
            <div className="accordion-item-container">
              {pictureURLs?.map((img, index) => (
                <Link
                  className={`project-image-${index + 1}`}
                  to={`/work/${title}`}
                  key={index}
                >
                  <img
                    src={img}
                    alt={`${title} Image ${index + 1}`}
                    key={index}
                  />
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
};

const WorkMain = () => {
  return (
    <main className="work-main">
      <section className="categories-filter">
        <ProjectCategories />
      </section>
      <section className="projects-accordion">
        <ProjectsAccordion />
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
