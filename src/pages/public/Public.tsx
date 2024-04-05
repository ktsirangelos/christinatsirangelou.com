import { publications } from "./Public.data";
import "./Public.scss";

const PublicHeader = () => {
  return (
    <header className="page-header">
      A list of all recent News, Publications and Events
    </header>
  );
};

const PublicationsTemplate = () => {
  return (
    <div className="publication-template">
      <p className="title">Title</p>
      <p className="type">Type</p>
      <p className="year">Year</p>
    </div>
  );
};

const PublicationsList = () => {
  return (
    <>
      {publications.map(({ title, url, type, year }, id) => (
        <div className="publication" key={id}>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </p>
          <p>{type}</p>
          <p>{year}</p>
        </div>
      ))}
    </>
  );
};

// temporary marginBottom so that the footer doesn't appear
// too high on the page as there are too few publications
const PublicMain = () => {
  return (
    <main className="page-main" style={{ marginBottom: "60vh" }}>
      <section className="publications">
        <PublicationsTemplate />
        <PublicationsList />
      </section>
    </main>
  );
};

export const Public = () => {
  return (
    <>
      <PublicHeader />
      <PublicMain />
    </>
  );
};
