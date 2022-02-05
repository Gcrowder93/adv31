import React from 'react';
import { Link } from 'react-router-dom';
import thisone from '../../Views/img/thisone.png';

import './MonsterDetails.css';

export default function MonsterDetails({ monsters }) {
  return (
    <div className="body2">
      <div>
        <header>
          <Link className="homelink4" to="/MonsterList">
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
              {/* need to figure out how to space inbetween the common locations */}

              <li> {monsters.common_locations} </li>
              {/* <li> {monsters.common_locations[1]} </li> */}
              {/* <li> {monsters.common_locations[2]} </li> */}
            </ol>
            <h2 className="h22">Description:</h2>
            <p>{monsters.description}</p>
            <h2 className="h22">
              <b>Possible Loot:</b>
            </h2>
            <p>
              <ol>
                <li>{monsters.drops[0]}</li>
                <li>{monsters.drops[1]}</li>
                <li>{monsters.drops[2]}</li>
                <li> {monsters.drops[3]}</li>
                <li>{monsters.drops[4]}</li>
              </ol>
            </p>
            <div>
              <img src={thisone} className="sword"></img>
            </div>
            <p>
              <Link className="homelink4" to="/">
                Back to Home
              </Link>
            </p>
          </div>
        </ol>
      </div>
    </div>
  );
}
