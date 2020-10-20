import React, { useState, useEffect } from 'react';
import Form from './components/Form'
// import Login from '.components/Login'
import axios from 'axios'
import * as yup from 'yup'
import schema from './components/schema'
import UserList from './components/Userlist'
import './styles/App.css';
import PrivateRoute from './utils/PrivateRoute';
import StoryDashBoard from './components/StoryDashBoard';
// import { Route, Switch } from "react-router-dom";

function App() {

const initialFormValues ={
username: '',
email: '',
password: '',
terms: false,
}

const initialDisabled = true;

const initialFormErrors = {
username: '',
email: '',
password: '',
}


const [users, setUser] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const formSubmit = () => {
  const newUser = {
   
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
   
  }

  postNewUser(newUser)
}

const postNewUser = (newUser) => {
  console.log(newUser)
  axios.post('https://expatjournalbw1020.herokuapp.com/signup', newUser)
    .then((res) => {
      setUser([res.data, ...newUser])
      })
    .catch(err => {
      console.log('POST ERR -->', err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}



const inputChange = (name, value) => {
 yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    })
  })
  setFormValues({
    ...formValues,
    [name]: value,
  })
}


useEffect(() => {
  schema.isValid(formValues)
    .then((valid) => {
        setDisabled(!valid)
    })
}, [formValues])

  return (
    <div className="App">
      <header className="App-header"></header>
      
        {/* <PrivateRoute path="/posts" component={StoryDashBoard}/> */}
        {/* <Route exact path="/login" component={Login} /> */}
      
      <Form 
      values={formValues} 
      disabled={disabled} 
      errors={formErrors} 
      change={inputChange}
      submit={formSubmit}
      />
      {users.map(user => {
        return <UserList key={user.id} details={user} />;
      })}
    </div>
  );
}


export default App;