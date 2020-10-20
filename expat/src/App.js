import React from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';
import './styles/App.css';
import PrivateRoute from './utils/PrivateRoute';
import StoryDashBoard from './components/StoryDashBoard';
// import { Route, Switch } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <header className="App-header"></header>
      
        {/* <PrivateRoute path="/posts" component={StoryDashBoard}/> */}
        {/* <Route exact path="/login" component={Login} /> */}
      
      {/* <Signup /> */}
      <Signup />
      <Signin />
    </div>
  );
}


export default App;