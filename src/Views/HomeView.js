import React from 'react';
import { Link } from 'react-router-dom';
// import MonsterList from '../Components/MonsterList/MonsterList';

export default function HomeView() {
  return (
    <div>
      <h1>This is a compendium for Breath of the Wild Monsters.</h1>
      <h2>Click the link below to view a list of all Monsters in BOTW.</h2>
      <Link to={'MonsterList'}>Monster List</Link>
      <h3>Click on an image to learn more about that monster.</h3>
      <h4>Things like its Common Location, what it Drops, etc.</h4>
    </div>
  );
}
