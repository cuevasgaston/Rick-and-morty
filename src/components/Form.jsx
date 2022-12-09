import React from 'react'
import { validation } from './validation';
import './Form.modules.css'
 

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    });

    function handleInputChange(e) {  
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })     
        setErrors(
            validation({
            ...userData,
            [e.target.name]: e.target.value,
        }));
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.login(userData)
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input
                        name='username'
                        type='text'
                        value={userData.username}
                        onChange={handleInputChange} />
                    <p className='danger'>{errors.username && errors.username}</p>
                </label>
                <label >Password:
                    <input
                        name='password'
                        type='password'
                        value={userData.password}
                        onChange={handleInputChange} />
                    <p className='danger'>{errors.password && errors.password}</p>
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}


