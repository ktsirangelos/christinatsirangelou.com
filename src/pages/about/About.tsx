import { clients } from "./About.data";
import "./About.scss";

const AboutHeader = () => {
  return (
    <header className="about-header">
      An architectural practice that actively integrates contextual language and
      responds to contemporary social, environmental, living, working, and
      cultural needs.
    </header>
  );
};

const AboutText = () => {
  return (
    <section className="about-text">
      <p className="first-paragraph">
        Christina Tsirangelou, as an MA architect, in 2009, co-founded 157+173
        Designers, an independent Product design studio with a global reach,
        gaining attention through media and trade fairs.
      </p>
      <p className="second-paragraph">
        During 2021- 2023, she became an Associate Creative director & Partner
        at Urban Soul Project (USP), a leading Greek architectural firm
        specializing in Hotel, Retail, Offices and Residential projects. This
        role enriched her expertise in large-scale projects, addressing
        challenges arising from the firm's rapid expansion to 100+ architects by
        2023.
      </p>
      <p className="thrid-paragraph">
        In the academic realm, in 2021, she assumed a role as an assistant
        teacher at the Aristotle University of Thessaloniki in Greece,
        contributing to the Bachelor's program in Interior Architectural Design.
      </p>
      <p className="fourth-paragraph">
        She deeply values the experience she gained collaborating with the
        architectural practice of Giorgos Triantafilidis, Arch. Prof. of UTH.
        Also, co-teaching in the BA Interior Architecture of AKTO+Middlesex
        Univestity, by the side of Arch. Prof. Dionisis Tsasis. Subsequently
        increased her experience in large scale projects collaborating with
        Sparch Architects, Arch. Prof. Rena Sakelaridou & Morpho Papanikolaou
        from 2006-2009.
      </p>
    </section>
  );
};

const AboutClients = () => {
  return (
    <section className="clients">
      <h2>Clients</h2>
      <div className="clients-list">
        {clients.map(({ name, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer">
            {name}
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        ))}
      </div>
    </section>
  );
};

const AboutMain = () => {
  return (
    <main className="about-main">
      <AboutText />
      <AboutClients />
    </main>
  );
};

export const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutMain />
    </>
  );
};
