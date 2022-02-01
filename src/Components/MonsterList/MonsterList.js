import React from 'react';

export default function MonsterList({ filterMonsters }) {
  return (
    <>
      <div>
        {filterMonsters.map((monsters) => (
          <p key={monsters.id}>{monsters.monsters}</p>
        ))}
      </div>
    </>
  );
}
