import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from './redux/reducers/user'


import PostsContainer from './components/PostsContainer'
import Header from './components/Header'
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile'
import Post from './components/Post';


class App extends Component{
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return(
      <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/posts" component={PostsContainer}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/register" component={Register}/>
          <Route path="/profile" component={Profile}/>
          
        </Switch>
      </Router>
      </div>
    )
  }
}

export default connect(null, {getUser})(App);
