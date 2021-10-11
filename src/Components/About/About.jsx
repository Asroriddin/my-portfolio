import React from 'react';
import './About.css';
import rasmde from './img/la.jpg'

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>O'zim haqimda.</h3>
            <p className="separator" />
          </div>
          <div className="rasmdee">
            <img src={rasmde} alt="" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Mening ismim Asroriddin.</h4>
            <p>
            Salom 👋
            </p>
            <p>
            Men Asroriddin Ahmadaliyev men 2000-yil 30-yanvarda Andijon viloyati Andijon shahrida tug'ildim. Yoshligimdan Web dasturlash sohasiga qiziqib kelaman. O'sha vaqtda bu sohaga oid darslik yoki mukammal bilim bera oladigon o'qituvchi topa olmaganman va bu qiziqishni chetga surib boshqa yonalishdan bordim.2020 yilga kelib Andijonda Raqamli shaxar ochildi va Web dasturlash kurslariga yozildim va o'rganishni boshladim.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;