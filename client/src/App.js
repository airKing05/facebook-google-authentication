import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter className="App ">
     <Header/>
     <Route exact path='/' component={Home}/>
     <Route path='/profile' component={Profile}/>
    </BrowserRouter>
  );
}

export default App;
