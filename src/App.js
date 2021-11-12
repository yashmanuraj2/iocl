import logo from './logo.svg';

import {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import { AuthContext } from './context/AuthContext';
import Addmodal from './components/addmodal'
import Header from './components/Header';

function App() {
  const {user} = useContext(AuthContext);
return (

    <Router>  
      <Switch>
        <Route exact path="/">
        {user ? <Home /> : <Login />}
          </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/header">
           <Header />
           </Route>
           <Route path = '/modal'>
             <Addmodal/>
           
           </Route>
          </Switch>
         
    </Router>

  );
}

export default App;
