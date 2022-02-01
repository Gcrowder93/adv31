import React from 'react';

export default function MonsterList({ monsters }) {
  return (
    <>
      {monsters.map((m) => {
        <div key={m.id}>
          <h1>{m.name}</h1>
        </div>;
      })}
    </>
  );
}

{
  /* <div className="List">
{monsters.map((monster) => (
  <p className="mon" key={monster.id}>
    {monster.mon}
  </p>
))}
</div> */
}
