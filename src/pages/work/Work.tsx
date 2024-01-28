import "./Work.scss";

const Work = () => {
  return (
    <>
      <header className="work-header">
        The practice delivers a wide spectrum of design services in the field of
        spatial design, such as Architectural design for New buildings and
        Interior projects, as well as Product design and Creative consultancy.
      </header>
      <main className="work-main">
        <section className="filter">
          <ul className="filter-items">
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
        </section>
        <section className="accordion">
          <div className="accordion-template">
            <p>Title</p>
            <p></p>
            <p>Type</p>
            <p></p>
            <p>Year</p>
          </div>
          <div className="accordion-list"></div>
        </section>
      </main>
    </>
  );
};

export { Work };
