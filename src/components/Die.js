import React, {Component} from 'react'
import '../styles/Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
    render(){
        const {face, rolling} = this.props
        return(
            
            <FontAwesomeIcon icon={['fas', 'fa-dice-d20']} className={`Die ${rolling && 'Die-shaking'}`}/>
            
        )
    }
}

export default Die
