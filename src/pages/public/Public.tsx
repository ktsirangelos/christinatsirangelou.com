const Public = () => {
  return (
    <main className="public-main">
      <section className="header-text">
        A list of all recent News, Publications and Events
      </section>
      <section className="public-section">
        <div className="public-template">
          <p>Title</p>
          <p></p>
          <p>Type</p>
          <p></p>
          <p>Year</p>
        </div>
        <div className="publications"></div>
      </section>
    </main>
  );
};

export { Public };
