import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import '../styles/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const logo = require('../images/logo.png')



function Login (props) {

    const [user, setUser] =useState({})
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleHome = () =>{
        navigate('/')
    }

    const handleRegister = () =>{
        navigate('/register')
    }

    const handleSubmit = () =>{

        if(!user.username && !user.password){
            alert('Please enter a username and password')
        }else if(!user.password){
            alert('Please enter a password')
        }else if(!user.username){
            alert('Please enter a username')
        }else{

        fetch('https://the-spellbook-server.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                const token = result.token
                const username = result.username
                localStorage.setItem('jwt', token)
                localStorage.setItem('username', username)
                localStorage.setItem('userId', result.userId)
                props.onLogin(token)
                navigate('/')
            }
        })
    }
}
    return(
        <>
            <div className='logo-container'> 
                <img className='logo-center' alt='logo' src={String(logo)} /> 
            </div>
            <div className='reg-body'>
                <h1 className='reg-heading'>The Spellbook</h1>
                <h3 className='reg-heading2'>a MTG companion app</h3>
                <FontAwesomeIcon className='user-icon' icon={["fas", "fa-user"]}/>
                <div className='reg-container'>
                    <input className='reg-textbox' onChange = {handleOnChange} name = "username" type = "text" placeholder = "Enter username" />
                    <input className='reg-textbox' onChange = {handleOnChange} name = "password" type = "password" placeholder = "Enter password" />
                    <div>
                        <button className='reg-log-btn' onClick = {handleSubmit}>Login</button>
                        <button className='reg-log-reg-btn' onClick = {handleRegister}>Register</button>
                    </div>    
                    <button className='reg-home-btn' onClick = {handleHome}>Home</button>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (token)=>dispatch({type: 'ON_LOGIN', payload: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)