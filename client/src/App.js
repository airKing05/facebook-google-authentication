import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchDataAction} from './redux/actions/fetchDataAction';

function App(props) {
  useEffect(() => {
    props.fetch_user()
  })
  return (
    <BrowserRouter className="App ">
     <Header/>
     <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/profile' component={Profile}/>
     </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetch_user:() => {dispatch(fetchDataAction())}
  }
}

export default connect(null, mapDispatchToProps)(App);
