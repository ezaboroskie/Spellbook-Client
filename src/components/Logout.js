import { useEffect } from "react";
import {connect} from 'react-redux'
import { useNavigate } from "react-router-dom";
import * as actionCreators from '../store/creators/actionCreators'

function Logout(props){

    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.removeItem('jwt')
        localStorage.removeItem('username')
        localStorage.removeItem('userId')
        props.onLogout()

        navigate('/login')
    })
    

    return(
        <>
        </>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onLogout: ()=>dispatch(actionCreators.logOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout)