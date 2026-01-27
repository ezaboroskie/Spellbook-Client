import React, {Component} from 'react'
import '../styles/Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
    render(){
        const {face, rolling, color} = this.props
        const iconStyle = color ? { color: color } : {}
        return(
            
            <FontAwesomeIcon 
                icon={['fas', 'fa-dice-d20']} 
                className={`Die ${rolling && 'Die-shaking'}`}
                style={iconStyle}
            />
            
        )
    }
}

export default Die
