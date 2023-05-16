import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const logo = require('../images/logo.png')

function Register(){
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    

    const handleOnChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleHome = () =>{
        navigate('/')
    }

    const handleSubmit = () => {


        fetch('https://the-spellbook-server.onrender.com/register', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result =>{
            if(result.error){
                console.log(result.error)
            }else{
                setUser(user)
                navigate('/login')
            }
        })
    }

    return(
        <>  
            <div className='logo-container'> 
            <img className='logo-center' alt='logo' src={String(logo)} /> 
            </div>
            <div className='reg-body'>  
                <h1 className='reg-heading'>New Sorcerer</h1>    
                <h3 className='reg-heading2'>register to save your favorite cards</h3>
                <FontAwesomeIcon className='user-icon' icon={["fas", "fa-user"]}/>
                <div className='reg-container'>
                    <input className='reg-textbox' onChange ={handleOnChange} name = "firstName" type = "text" placeholder="Enter your first name"/>
                    <input className='reg-textbox' onChange ={handleOnChange} name = "lastName" type = "text" placeholder="Enter your last name"/>
                    <input className='reg-textbox' onChange ={handleOnChange} name = "username" type = "text" placeholder="Enter your username"/>
                    <input className='reg-textbox' onChange ={handleOnChange} name = "password" type = "password" placeholder="Enter your password"/>
                    <button className='reg-reg-btn' onClick ={handleSubmit}>Register</button>
                    <button className='reg-home-btn' onClick ={handleHome}>Home</button>
                </div>
            </div> 
           
        </>
    )

}

export default Register