import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.css';
import zelda from './img/zelda.png';
import thisone from './img/thisone.png';

export default function HomeView() {
  return (
    <div className="home">
      <header className="header">This is a compendium for Breath of the Wild Monsters.</header>
      <h2 className="h2home">Click the link below to view a list of all Monsters in BOTW.</h2>
      <h3>
        <Link className="monsterhome" to="/MonsterList">
          Monster List
        </Link>
      </h3>
      <img src={zelda} className="imghome"></img>
      <h3 className="h3home">Click on an image to learn more about that monster.</h3>
      <img src={thisone} className="sword"></img>
      <footer className="foot">Last Updated Feb. 2022</footer>
    </div>
  );
}
