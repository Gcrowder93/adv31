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
          <p>{monsters.common_locations[0]}</p>
          <p>{monsters.common_locations[1]}</p>
          <p>{monsters.common_locations[2]}</p>
          <p>{monsters.common_locations[3]}</p>
          <p>{monsters.common_locations[4]}</p>

          <p>{monsters.description}</p>
          <b>Possible Loot:</b>
          <p>
            {monsters.drops[0]}, {monsters.drops[1]}, {monsters.drops[2]}, {monsters.drops[3]},{' '}
            {monsters.drops[4]}, {monsters.drops[5]}, {monsters.drops[6]}, {monsters.drops[7]},{' '}
            {monsters.drops[8]}
          </p>

          <hr></hr>
        </ul>
      </div>
    </div>
  );
}
