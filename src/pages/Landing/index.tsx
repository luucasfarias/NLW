import React from 'react';

import './styles.css';

import brandImg from '../../assets/images/logo.svg';
import landingImg from '../../assets//images/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={brandImg} alt="logo proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="landing" className="hero-image"/>

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study"/>
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="give class"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 300 conexões realizadas <img src={purpleHeartIcon} alt="number connections"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;