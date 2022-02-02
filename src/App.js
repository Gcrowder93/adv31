import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getMonsters } from './services/Monsters';
import MonsterList from './Components/MonsterList/MonsterList';
import HomeView from './Views/HomeView';
import DetailView from './Views/DetailView';
// import MonsterDetails from './Components/MonsterDetails/MonsterDetails';

function App() {
  const [monsters, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const monsterData = await getMonsters();
      setMonster(monsterData);
      console.log(monsterData);
      setLoading(false);
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
            {/* <MonsterList {...{ monsters }} /> */}
          </Route>
          <Route path="/monsterlist">
            <MonsterList {...{ monsters }} />
          </Route>
          <Route path="/DetailView/:id">
            <DetailView />
          </Route>
          {/* <Route path="/monsterdetails">
            <MonsterDetails {...{ monsters }} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
