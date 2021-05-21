import React from 'react';
import './App.css';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Support from "./Pages/Support/support";
import Host from './Host';
import NotConnected from "./Pages/NotConnected/not_connected";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.host = 'https://ec57f358e67d.ngrok.io';
        this.state = {
            connected: true,
            ready: false,
        }
    }

    async componentDidMount() {
        return;
        await fetch(this.host + "/connect", {
            method: "GET",
        }).then((response) => {
            this.setState({
                connected: response.status === 200,
                ready: true,
            })
        });
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Host.Provider value={{host: this.host, id: -1}}>

                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                        <Route path='/about' component={About}/>
                        <Route path='/contacts' component={Contact}/>
                        <Route path='/support' component={Support}>
                            {!this.state.connected && <Redirect to="/connection-not-established"/>}
                        </Route>
                        <Route path='/home' component={Home}>
                            {!this.state.connected && <Redirect to="/connection-not-established"/>}
                        </Route>
                        <Route path='/connection-not-established' component={NotConnected}>
                            {this.state.connected && <Redirect to="/home"/>}
                        </Route>
                    </Host.Provider>
                </Switch>
            </Router>
        );
    }
}

export default App;
