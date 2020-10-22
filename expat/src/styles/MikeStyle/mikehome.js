import React from 'react';

import Signin from '../../components/Signin';
import Signup from '../../components/Signup';
import './styles/App.css';
import StoryDashBoard from '../../components/StoryDashBoard';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './MikeStyle/Header'
import Footer from './MikeStyle/Footer'
// import EditStory from './components/EditStory';
// import AddStory from './components/AddStory';
// import AddComment from './components/AddComment';

function mikehome() {


  return (<Router>
    <div className="App">
      <header className="App-header"></header>
      <Header />
            
      <Route path="/Signup">
         <Signup ></Signup>
      </Route>
     <Route exact path="/Signin">
       <Signin />
     </Route>
     <Route exact path="/posts">
         <StoryDashBoard />
      </Route>

      {/* <Route
        exact path="/posts/edit/:id"
        component= {EditStory}
        /> */}

      {/* <Route
      exact path="/posts/add"
      component= {AddStory}
      />
       */}
      {/* <Route
      exact path = "/posts/comment/:id"
      component= {AddComment}
      /> */}

      </div>
      <Footer />
  </Router>
    
  );
}


export default mikehome;