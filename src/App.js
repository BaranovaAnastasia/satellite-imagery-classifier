import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Team from "./Pages/Team/team";
import Contact from "./Pages/Contact/contact";
import Support from "./Pages/Support/support";

class App extends React.Component{
  render() {
    return (
        <>
          <Router>
            <Switch>
              <Route path='/about' component={About} />
              <Route path='/team' component={Team} />
              <Route path='/contacts' component={Contact} />
              <Route path='/support' component={Support} />
              <Route path='/' component={Home} />
            </Switch>
          </Router>
        </>
    );
  }
}

export default App;
