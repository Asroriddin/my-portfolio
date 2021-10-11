import React from 'react';
import Project from './Project';
import './Projects.css';
import rasm1 from "./Images/Screenshot_2.png"
import rasm2 from './Images/Screenshot_1.png'
import rasm3 from './Images/Screenshot_3.png'
import rasm4 from './Images/Screenshot_19.png'
import rasm5 from './Images/analytics.png'
import rasm6 from "./Images/pr.jpg"


const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            Men tayorlagan proyektlar
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Pdf-drive"
            img={rasm1}
            tech="html css react "
            link="https://pdfdrive1-f9467.web.app/"
          >
            <p>
              Pdf-drive saytining cloni.
            </p>
          </Project>
          <Project
            title="You-tube"
            img={rasm2}
            tech="html css figma"
            link="https://asroriddin.github.io/"
            repo="https://github.com/Asroriddin/asroriddin.github.io"
          >
            <p>
              Harakat qildim.
            </p>
          </Project>
          <Project
            title="Audible"
            img={rasm3}
            tech="html css figma"
            link="https://asroriddin.github.io/audible/"
            repo="https://github.com/Asroriddin/asroriddin.github.io/tree/main/audible"
          >
            <p>
              FIGMA
            </p>
          </Project>
          <Project
            title="Crappo"
            img={rasm4}
            tech="html css figma"
            link="https://asroriddin.github.io/Crappo/"
            repo="https://github.com/Asroriddin/asroriddin.github.io/tree/main/Crappo"
          >
          <p>Figma</p>
          </Project>
          <Project
            title="Analytics"
            img={rasm5}
            tech="html css figma"
            link="https://asroriddin.github.io/Analitics/"
            repo="https://github.com/Asroriddin/asroriddin.github.io/tree/main/Analitics"
          >
          <p>
              Analitic sayt.
            </p>
          </Project>
          <Project
            title="Finaancial Assistanse
            True Purpose"
            img={rasm6}
            tech="html css figma"
            link="https://asrorbekweb.netlify.app/"
            repo="https://github.com/Asroriddin/FINAANCIAL"
          >
          <p>
              FIGMA
          </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;