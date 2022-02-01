import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
// import MonsterList from './Components/MonsterList/MonsterList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
