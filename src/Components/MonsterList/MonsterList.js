import React from 'react';
import { Link } from 'react-router-dom';

export default function MonsterList({ monsters }) {
  return (
    <div>
      <header>
        <br></br>
        <a href="/">Back To Home</a>
      </header>
      <h1> -List of Monsters-</h1>
      <h3> -click an image to learn more- </h3>
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
          <hr></hr>
        </ul>
      ))}
      <Link to="/">Back to Home</Link>

      {/* <a className="homebtn" href="/">
        Back To Home
      </a> */}
    </div>
  );
}
