import {connect} from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import '../styles/Counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function IncrementDecrementCounter(props){


    return(
        <>
            <div className='arrow-container'>
            <h1 onClick = {props.onIncrement} className='plus-minus-text'>+1</h1>    
            <FontAwesomeIcon onClick = {props.onIncrement} icon ={["fas" , "fa-angle-up"]} className='arrow-up'/>
            <FontAwesomeIcon onClick = {props.onDecrement} icon ={["fas" , "fa-angle-down"]} className='arrow-down'/>
            <h1 onClick = {props.onIncrement} className='plus-minus-text'>-1</h1>
            </div>
       </>
    )

}    

    const mapStateToProps = (state)=>{
        return{
            ctr:state.count
        }
    }

    const mapDispatchToProps = (dispatch)=>{
        return{
        
            onIncrement: ()=>dispatch(actionCreators.incrementCounter()),  
            onDecrement: ()=>dispatch(actionCreators.decrementCounter())

        }   
    }

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrementCounter);