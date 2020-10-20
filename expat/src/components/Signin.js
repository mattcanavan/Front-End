import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import schema from '../testing/signInSchema';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export default function Signup( props ) {

    //INITIAL VALUES
    const initialFormValues = {
        username: '',
        password: '',
    }

    const initialDisabled = true;

    const initialFormErrors = {
        username: '',
        password: '',
    }

    //STATE
    const [userName, setUserName] = useState(initialFormValues);
    const [credentials, setCredentials] = useState(initialFormValues)
    const [formValues, setFormValues] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const {push} = useHistory();
    

    //SIDE EFFECTS
    useEffect(() => {
        schema.isValid(formValues)
          .then((valid) => {
              setDisabled(!valid)
          })
      }, [formValues])

    //HELPER FUNCTIONS
    const onChange = (evt) => {
        const { name, value, } = evt.target;

        inputChange(name, value);
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

    const onSubmit = (evt) => {
        evt.preventDefault()
        login(formValues)
    }

    const login = (loginObj) => {
        console.log(loginObj)
        axios.post('https://expatjournalbw1020.herokuapp.com/login', loginObj)
            .then((res) => {
                // debugger
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', formValues.username)
            push('/posts')//useHistory
            console.log(formValues.username)
            console.log(res)
            // setUserName(credentials.username);
            setCredentials(initialFormValues);
            // getPosts();
            })
            .catch(err => {
                console.log('POST ERR -->', err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }


    return (
        <div className='centerForm'>
            <div id='maxform'>
            <form onSubmit={onSubmit}>

                <div className="errors">
                    <div>{formErrors.username}</div>
                    <div>{formErrors.password}</div>

                </div>

                <div>
                    <h3>Login</h3>
                    <label> username:
                            <input
                            name='username'
                            type='text'
                            value={formValues.username}
                            onChange={onChange}
                            placeholder='Name here'
                        />
                    </label>
                </div>

                <div>
                    <label> Password:
                            <input
                            name='password'
                            type='password'
                            value={formValues.password}
                            onChange={onChange}
                            placeholder='Password here'
                        />
                    </label>
                </div>

                <button disabled={disabled}>Submit</button>

            </form>
            </div>
        </div>
    )
}
