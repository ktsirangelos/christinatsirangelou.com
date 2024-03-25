import { publications } from "./Public.data";
import "./Public.scss";

const PublicHeader = () => {
  return (
    <header className="public-header">
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

const PublicMain = () => {
  return (
    <main className="public-main" style={{ marginBottom: "50vh" }}>
      <PublicationsTemplate />
      <PublicationsList />
    </main>
  );
};

const Public = () => {
  return (
    <>
      <PublicHeader />
      <PublicMain />
    </>
  );
};

export { Public };
