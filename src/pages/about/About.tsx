import { clients } from "./About.data";
import "./About.scss";

import christina_mobile from "@/pictures/team/Christina_Tsirangelou_mobile.webp";
import christina_laptop from "@/pictures/team/Christina_Tsirangelou_laptop.webp";
import christina_desktop from "@/pictures/team/Christina_Tsirangelou_desktop.webp";

import niovi_mobile from "@/pictures/team/Niovi_Tsompikou_mobile.webp";
import niovi_laptop from "@/pictures/team/Niovi_Tsompikou_laptop.webp";
import niovi_desktop from "@/pictures/team/Niovi_Tsompikou_desktop.webp";

const AboutHeader = () => {
  return (
    <header className="page-header">
      <h2>
        An architectural practice that actively integrates contextual language
        and responds to contemporary social, environmental, living, working, and
        cultural needs.
      </h2>
    </header>
  );
};

const AboutTeam = () => {
  return (
    <section className="team">
      <h2>Team</h2>
      <div className="bios">
        <div className="christina">
          <picture className="picture">
            <source media="(min-width: 112.5em)" srcSet={christina_desktop} />
            <source media="(min-width: 75em)" srcSet={christina_laptop} />
            <img
              src={christina_mobile}
              alt="Christina Tsirangelou"
              loading="lazy"
            />
          </picture>
          <div className="info">
            <div className="title">
              <h3>Christina Tsirangelou</h3>
              <h3>Architect &amp; Founder</h3>
            </div>
            <div className="text">
              <p>
                Christina Tsirangelou studied architecture at the Aristotle
                University of Thessaloniki, Department of Architecture, in
                Greece, where she earned her MA in Architecture. She gained
                experience working with Giorgos Triantafilidis, Professor of
                Architecture at UTH, Dimitra Gourgioti, and at Sparch Architects
                under Professors Rena Sakelaridou and Morpho Papanikolaou. In
                2010, she established her own practice and co-founded the
                independent product design studio, 157+173 Designers, which
                achieved international recognition through media and trade
                fairs. From 2021 to 2023, Christina served as Associate Creative
                Director and Partner at Urban Soul Project (USP) in Thessaloniki
                and Athens, a leading Greek architectural firm specializing in
                hotel, retail, office, and residential projects. This role
                expanded her expertise in large-scale projects and the
                complexities of managing a firm that grew to over 100 architects
                by 2023.
                <br />
                <br />
                In addition to her design work, Christina became an assistant
                instructor in the Bachelor's program in Interior Architectural
                Design at Aristotle University of Thessaloniki (AUTH) in 2021.
                She also served as a teaching assistant in the BA Interior
                Architecture program at AKTO College, affiliated with Middlesex
                University, alongside Professor Dionysis Tsasis.
                <br />
                <br />
                In 2023, Christina re-established her own practice, CTa
                (Christina Tsirangelou Architects), located in Athens. The same
                year, she founded Social Living Greece, a private organization
                that works towards meaningful economic, environmental and
                cultural development in the Cycladic islands of Greece.
                Christina is also member of A37, an architectural design hub
                located in Dionysiou Areopagitou 37, where she continues to
                practice her expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="niovi">
          <picture className="picture">
            <source media="(min-width: 112.5em)" srcSet={niovi_desktop} />
            <source media="(min-width: 75em)" srcSet={niovi_laptop} />
            <img src={niovi_mobile} alt="Niovi Tsompikou" loading="lazy" />
          </picture>
          <div className="info">
            <div className="title">
              <h3>Niovi Tsompikou</h3>
              <h3>Architect</h3>
            </div>
            <div className="text">
              <p>
                Niovi Tsompikou studied architecture at the Democritus
                University of Thrace, where she earned her MA in Architecture.
                She worked for SParch Architects and later on for the
                independent office RS SParch for the last 12 years, contributing
                to various new build, office projects, and both private and
                public competitions. In 2024, Niovi became an integral part of
                CTa. As a Senior Architect, she oversees the entire design
                process for numerous upcoming projects and supervises
                project-based teams to ensure successful delivery. She also
                works as a freelance architect.
                <br />
                <br />
                Notable project mentions
                <br />
                <br />
                2023 εξέλιξις, Athens National Archaeological Museum,
                Competition,
                <br />
                Athens, Greece. Lead Architect: OMA, Greek Partner: RS SParch
                <br />
                <br />
                2022 eLement_Fragkokklisias Office Building, Prodea Investments,
                <br />
                Athens, Greece. Architect: RS SParch_Rena Sakellaridou
                <br />
                <br />
                2020 Marina Galleria_ Six Plazas, Competition, Hellinikon,
                <br />
                Athens, Greece. Architect: RS SParch_Rena Sakellaridou
                <br />
                <br />
                2018 Agemar Headquarters, Angelicoussis Group of Companies HQ,
                <br />
                Athens, Greece. Architect: RS SParch_Rena Sakellaridou
                <br />
                <br />
                2018 Forest Houses, Museum of Forest Finn Culture, Competition,
                <br />
                Svullrya, Norway. Architects: RS SParch x Meinich Arkitekter AS
              </p>
            </div>
          </div>
        </div>
      </div>
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
    <main className="page-main">
      <AboutTeam />
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
