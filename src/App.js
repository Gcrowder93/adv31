import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getMonsters } from './services/Monsters';
import MonsterList from './Components/MonsterList/MonsterList';
import HomeView from './Views/HomeView';
import DetailView from './Views/DetailView';
// import Controls from './Components/Controls/Controls';

function App() {
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [query, setQuery] = useState();

  // const filterMonsters = monsters.filter(
  //   (monsters) => monsters.name.toLowerCase().includes(query) || monsters.name.includes(query)
  // );

  useEffect(() => {
    let unmounted = false;
    const fetchData = async () => {
      const monsterData = await getMonsters();
      setMonster(monsterData);
      if (!unmounted) setLoading(false);
    };

    fetchData();
  }, []);
  if (loading) return <h1>Loading..</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/monsterlist">
            {/* <Controls query={query} setQuery={setQuery} /> */}
            <MonsterList {...{ monsters }} /*filterMonsters={filterMonsters}*/ />
          </Route>
          <Route path="/DetailView/:id">
            <DetailView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
