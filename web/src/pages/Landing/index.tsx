import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcons from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom'
import './styles.css';
import api from '../../services/api';

function Landing() {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(reponse => {
      const { total } = reponse.data;

      setTotalConnections(total);
    })
  }, []);//[] executa quando a página é carregada

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} coneções já realizadas <img src={purpleHeartIcons} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing