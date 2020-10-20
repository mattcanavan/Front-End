import React from 'react'

export default function Signin(props) {

const { values, disabled, errors, change, submit } = props;

const onChange = (evt) => {
const { name, type, value, checked } = evt.target;
const valueToUse = type === 'checkbox' ? checked : value;
change(name, valueToUse);
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
}

return (
<div id='maxform'>
<form onSubmit={onSubmit}>

    <div className="errors">
          
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          
    </div>


<div>
<label> Email:
<input 
    name='email'
    type='email'
    value={values.email}
    onChange={onChange}
    placeholder='Email address here'
/>
</label>
</div>
<div>
<label> Password:
<input 
    name='password'
    type='password'
    value={values.password}
    onChange={onChange}
    placeholder='Password here'
/>
</label>
</div>

<button disabled={disabled}>Submit</button>

</form>
</div>
    )
}
