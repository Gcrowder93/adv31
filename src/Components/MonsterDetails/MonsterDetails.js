import React from 'react';
import { Link } from 'react-router-dom';

import './MonsterDetails.css';

export default function MonsterDetails({ monsters }) {
  return (
    <div className="body">
      <div>
        <header>
          <Link className="homelink" to="/MonsterList">
            Back to Monster List
          </Link>
        </header>
        <h1 className="h12">
          <p className="name2">
            <b>{monsters.name.toUpperCase()}</b>
          </p>
        </h1>
        <ol>
          <p>
            <img className="img2" src={monsters.image}></img>
          </p>
          <div className="details2">
            <h2 className="h22">
              <b>Common Locations:</b>
            </h2>
            <ol>
              <li> {monsters.common_locations[0]} </li>
              <li> {monsters.common_locations[1]} </li>
              <li> {monsters.common_locations[2]} </li>
            </ol>
            <h2 className="h22">Description:</h2>
            <p>{monsters.description}</p>
            <h2 className="h22">
              <b>Possible Loot:</b>
            </h2>
            <ol>
              <li>
                {monsters.drops[0]} {monsters.drops[1]}
              </li>
            </ol>
            <p>
              <li>
                {monsters.drops[2]} {monsters.drops[3]}
                {monsters.drops[4]}
              </li>
            </p>
          </div>
        </ol>
      </div>
    </div>
  );
}
