import React from 'react';

import Signin from './components/Signin';
import Signup from './components/Signup';
import './styles/App.css';
import PrivateRoute from './utils/PrivateRoute';
import StoryDashBoard from './components/StoryDashBoard';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header'
import EditStory from './components/EditStory';
import AddStory from './components/AddStory';
import AddComment from './components/AddComment';
import mikehome from './styles/mikehome'

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
     <Route exact path="/posts">
         <StoryDashBoard />
      </Route>

      <Route
        exact path="/posts/edit/:id"
        component= {EditStory}
        />

      <Route
      exact path="/posts/add"
      component= {AddStory}
      />
      
      <Route
      exact path = "/posts/comment/:id"
      component= {AddComment}
      />
        <Route
      exact path = "/mikehome"
      component= {mikehome}
      />

    </div>
  </Router>
    
  );
}


export default App;