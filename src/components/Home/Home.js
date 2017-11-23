import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';


import About from "../About/About";
import Articles from "../Articles/Articles";
import Article from "../Articles/Article/Article";
import ArticlesEdit from "../Articles/ArticlesEdit/ArticlesEdit";
import MyArticles from "../Articles/MyArticles/MyArticles";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideBarAndCover: false,
        };
        this.toggleSideBarCover = this.toggleSideBarCover.bind(this);
        this.renderGreeting = this.renderGreeting.bind(this);
    }

    toggleSideBarCover() {
        this.setState({ showSideBarAndCover: !this.state.showSideBarAndCover });
    }

    renderCover() {
        if (this.state.showSideBarAndCover) {
           return <div id="cover" onClick={() => {this.toggleSideBarCover()}}></div>
        }
    }

    renderGreeting() {
        if (this.props.userEmail !== '') {
            return (
                <span>Hello, {this.props.userEmail}</span>
            )
        }
    }

    render() {
        return (
            <div className="App">
              <SideBar openSideBar={this.state.showSideBarAndCover} toggleSideBarCover={this.toggleSideBarCover}/>
                <main>
                    {this.renderCover()}
                    <TopBar toggleSideBarCover={this.toggleSideBarCover}/>
                    <div id="content-wrapper" className="route-container">
                        <Switch>
                            <Route exact path='/' component={About} />
                            <Route exact path='/articles'
                                   render={(props) => ( <Articles {...props} renderGreeting={this.renderGreeting}/> )}
                            />
                            <PrivateRoute exact path='/articles/new'
                                          {...this.props}
                                          renderGreeting={this.renderGreeting}
                                          component={ArticlesEdit}
                                          authenticated={this.props.authenticated}
                            />
                            <PrivateRoute path='/articles/:id/edit'
                                          {...this.props}
                                          renderGreeting={this.renderGreeting}
                                          component={ArticlesEdit}
                                          authenticated={this.props.authenticated}
                            />
                            <Route path='/articles/:id'
                                   render={(props) => ( <Article {...props} renderGreeting={this.renderGreeting}/> )}
                            />
                            <PrivateRoute exact path='/my-articles'
                                          renderGreeting={this.renderGreeting}
                                          {...this.props}
                                          component={MyArticles}
                                          authenticated={this.props.authenticated}
                            />
                            <Redirect to='/404' />
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        userEmail: state.auth.email
    }
}

export default connect(mapStateToProps)(Home);
