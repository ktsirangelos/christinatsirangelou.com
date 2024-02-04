import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { projects } from "@/data/projects";
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

const Categories = () => {
  return (
    <ul className="categories">
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

const WorkAccordion = () => {
  return (
    <Accordion>
      {projects.map(
        ({ title, type }: { title: string; type: string }, i: number) => (
          <AccordionItem header={title} key={i}>
            {type}
          </AccordionItem>
        ),
      )}
    </Accordion>
  );
};

const WorkMain = () => {
  return (
    <main className="work-main">
      <section className="category-filter">
        <Categories />
      </section>
      <section className="accordion">
        <WorkAccordion />
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
