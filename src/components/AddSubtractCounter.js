import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import '../styles/Counter.css'

function AddSubtractCounter(props){

    const [counter , setCounter] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value
        if(value.length == 0){
            return
        }
        setCounter(parseInt(value))
    }


    return(
        <>
            <div className='add-sub-container'>
                <div className='plus-container'>
                    <FontAwesomeIcon className='plus-icon' onClick = {() => props.onAdd(parseInt(counter))} icon={["fas", "fa-circle-plus"]}/>
                </div>
                <div className='text-box-container'>
                    <input className='text-box'  type = 'text' onChange = {handleChange}/>
                </div>
                <div className='minus-container'>
                    <FontAwesomeIcon className='minus-icon' onClick = {() => props.onSubtract(parseInt(counter))} icon={["fas", "fa-circle-minus"]}/>
                </div>
            </div>

        </>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onAdd: (value) => dispatch(actionCreators.addCounter(value)),
        onSubtract: (value) => dispatch(actionCreators.subractCounter(value))
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter);