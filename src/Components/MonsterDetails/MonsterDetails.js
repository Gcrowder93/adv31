import React from 'react';

export default function MonsterDetails({ monsters }) {
  return (
    <div>
      <div>
        <header>
          <br></br>
          <a href="/">Back To Home</a>
        </header>
        <h1> -Monster Details-</h1>
        <ul>
          <p>
            <b>{monsters.name.toUpperCase()}</b>
          </p>
          <p>
            <img src={monsters.image}></img>
          </p>
          <b>Common Locations:</b>
          <p>{monsters.common_locations}</p>
          <p>{monsters.description}</p>
          <b>Possible Loot:</b>
          <p>{monsters.drops}</p>
          <hr></hr>
        </ul>
      </div>
    </div>
  );
}
