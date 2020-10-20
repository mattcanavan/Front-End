import React from 'react'

export default function Signup(props) {

const { values, disabled, errors, change, submit } = props;

const onChange = (evt) => {
const { name,  value,  } = evt.target;

change(name, value);
}

const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
}

return (
<div className='centerForm'>
<div id='maxform'>
<form onSubmit={onSubmit}>

    <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
         
    </div>

<div>
    <h3>Sign Up</h3>
<label> username:
<input 
    name='username'
    type='text'
    value={values.name}
    onChange={onChange}
    placeholder='Name here'
/>
</label>
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
</div>
    )
}
