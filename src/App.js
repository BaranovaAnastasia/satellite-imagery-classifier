import React from 'react';
import './App.css';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Support from "./Pages/Support/support";
import Host from './Host';

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Host.Provider value={{host: 'http://192.168.200.36:8080', id: -1}}>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route path='/about' component={About}/>
                            <Route path='/contacts' component={Contact}/>
                            <Route path='/support' component={Support}/>
                            <Route path='/home' component={Home}/>
                        </Host.Provider>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
