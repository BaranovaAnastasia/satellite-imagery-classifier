import React from 'react';
import './App.css';
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Support from "./Pages/Support/support";
import Host from './Host';
import NotConnected from "./Pages/NotConnected/not_connected";
import Start from "./Pages/start/start";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.host = 'http://2653d4393f7b.ngrok.io';
        this.state = {
            connected: true,
            ready: false,
        }
    }

    async componentDidMount() {
        try {
            console.log("trying to connect")
            await fetch(this.host + "/connect", {
                method: "GET",
            }).then(async (response) => {
                await this.setState({
                    connected: response.status === 200,
                    ready: true,
                })
                console.log("connection: " + response.status)
            });
        } catch {
            await this.setState({
                connected: false,
                ready: true,
            })
            console.log("no connection")
        }
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
                        <Route path='/home' component={Start}/>
                        <Route path='/connection-not-established' component={NotConnected}>
                            {this.state.connected && this.state.ready && <Redirect to="/home"/>}
                        </Route>
                        <Route path="/classifier" component={Home}>
                            {!this.state.connected && <Redirect to="/connection-not-established"/>}
                        </Route>
                    </Host.Provider>
                </Switch>
            </Router>
        );
    }
}

export default App;
