import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';
import Auth from "../Auth/Auth";
import NotFound from "../Error/NotFound";
import Home from "../Home/Home";
import AppStore from '../../appStore/AppStore';


class App extends Component {

    componentWillMount(){

        firebase.initializeApp({
            apiKey: 'AIzaSyBx-Kq9xhmarTXfCf0IozirHSNa-r8eBTI',
            authDomain: 'articles-aeaf0.firebaseapp.com',
            databaseURL: 'https://articles-aeaf0.firebaseio.com',
            projectId: 'articles-aeaf0',
            storageBucket: 'articles-aeaf0.appspot.com',
            messagingSenderId: '252978176491'
        });
    }

  render() {
    return (
        <Provider store={AppStore}>
            <Router>
                <Switch>
                    <Route exact path='/signin' component={Auth} />
                    <Route exact path='/signup' component={Auth} />
                    <Route exact path='/404' component={NotFound} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
  }
}

export default App;
