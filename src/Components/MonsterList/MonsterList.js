import React from 'react';
import './monsterlist.css';
import { Link } from 'react-router-dom';

export default function MonsterList({ monsters }) {
  console.log(monsters);
  return (
    <div>
      <h1 className="h1"> -List of Monsters-</h1>
      {monsters.data.map((monster) => (
        <ul key={monster.id}>
          <p>
            <b>{monster.name.toUpperCase()}</b>
          </p>
          <p>
            <Link to={`/DetailView/${monster.id}`}>
              <img src={monster.image}></img>
            </Link>
          </p>
          {/* <li>{monster.common_locations}</li>
          <li>{monster.description}</li>
          <li>{monster.drops}</li> */}
          <hr></hr>
        </ul>
      ))}
    </div>
  );
}
