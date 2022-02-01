import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import HomeView from './Views/HomeView';
import { getMonsters } from './services/Monsters';
import MonsterList from './Components/MonsterList/MonsterList';

function App() {
  const [monster, setMonster] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const monsterData = await getMonsters();
      setMonster(monsterData.results);
      setLoading(false);
    };
    {
      fetchData();
    }
  }, []);
  if (loading) return <h1>Loading..</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MonsterList monster={monster} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
