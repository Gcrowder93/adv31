export async function getMonsters() {
  const response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
  const monsterData = await response.json();
  return monsterData;
}

export async function getMonstersById(id) {
  const response = await fetch(
    `https://botw-compendium.herokuapp.com/api/v2/category/monsters/${id}`
  );
  const monsterData = await response.json();
  return monsterData[0];
}
