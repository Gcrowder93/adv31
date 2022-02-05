import React from 'react';
import { Link } from 'react-router-dom';

import './MonsterList.css';

export default function MonsterList({ monsters }) {
  return (
    <div className="page">
      <header>
        <Link className="homelink" to="/">
          Back to Home
        </Link>
      </header>
      <h1 className="h1"> △ Monsters of Hyrule △</h1>
      <h4 className="h3"> Select an Image to Learn More </h4>
      <div className="imgcard">
        {monsters.data.map((monster) => (
          <ul key={monster.id}>
            <p className="monstername">
              <b>{monster.name.toUpperCase()}</b>
            </p>
            <p>
              <Link className="imglink" to={`/DetailView/${monster.id}`}>
                <img className="listimg" src={monster.image}></img>
              </Link>
            </p>
          </ul>
        ))}
      </div>
      <Link className="homelink" to="/">
        Back to Home
      </Link>
    </div>
  );
}
