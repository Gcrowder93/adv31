# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

https://botw-compendium.herokuapp.com/api/v2/category/monsters

category, common_locations, description, drops, id, image, name

Components Folder:[.]
MonsterList.js[.]
(

<!-- import React from 'react';

export default function MonsterList({ filterMonsters }) {
return (
<>

<div>

{filterMonsters.map((monster) => (

<p key={monsters.id}>{monsters.monsters}</p>

))}

</div>

</>
);
} -->

)

Services Folder:[.]
Monsters.js[.]
(

<!-- export async function getMonsters() {
const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
const monsterData = await response.json();
return monsterData;
} -->

)

MonsterRoute.js[.]
Client.js[.]

Views Folder:
Home Folder:(?)
Home.js(?)
Monsters Folder:
MonsterDetails.js
MonsterList.js

Views Folder:
MonsterDetail.js - DetailCard - renders the info
