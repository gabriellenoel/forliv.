import './App.css';
import Lab from './components/Lab/Lab.jsx';
import Library from './components/Library/Library.jsx';
import Start from './components/Start/Start.jsx';
import Radio from './components/Radio/Radio.jsx';
import Homeroom from './components/Homeroom/Homeroom.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import liv from './components/Start/livcomposition-03.jpg';
import classroom from './components/Homeroom/classroom.png';
import windowsbg from './components/Lab/windowsbg.jpeg';
import libraries from './components/Library/library.gif';
import rfr from './components/Radio/radiobg.jpg';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
      <Switch>
      <Route exact path="/">
        <img src={liv} className="background" alt="bg" />
        <Start />
        </Route>
        <Route exact path="/homeroom">
        <img src={classroom} className="background" alt="bg" />
        <Homeroom />
        </Route>

        <Route exact path="/lab">
        <img src={windowsbg} className="background" alt="bg" />
        <Lab />
        </Route>

        <Route exact path="/radio">
        <img src={rfr} className="background" alt="bg" />
        <Radio />
        </Route>


        <Route exact path="/library">
        <img src={libraries} className="background" alt="bg" />
        <Library />
        </Route>

      </Switch> 
      </Router>

    </div>
  );
}

export default App;
