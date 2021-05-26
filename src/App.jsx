import React from 'react';
import "./App.css";
import Login from './components/Login'
import HomeContainer from './components/HomeContainer'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
  <div className="App">
    <Router>
    <Route path="/components/HomeContainer" component={HomeContainer} />
    
    <Login></Login>
    
  </Router>
  {/* <HomeContainer></HomeContainer> */}

  </div>
  );
}

export default App;
