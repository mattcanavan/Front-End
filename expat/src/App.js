import React from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';
import './styles/App.css';
import PrivateRoute from './utils/PrivateRoute';
import StoryDashBoard from './components/StoryDashBoard';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header'

function App() {


  return (<Router>
    <div className="App">
      <header className="App-header"></header>
      <Header />
      {/* <Switch>
        <PrivateRoute path="/posts" component={StoryDashBoard}/>
        <Route exact path="/Signin" component={Signin} />
      </Switch> */}
        
      
      <Route path="/Signup">
         <Signup ></Signup>
      </Route>
     <Route exact path="/Signin">
       <Signin />
     </Route>
     <Route path="/posts">
         <StoryDashBoard />
      </Route>
      
    </div>
  </Router>
    
  );
}


export default App;