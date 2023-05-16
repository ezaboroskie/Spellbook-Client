import {connect} from 'react-redux'
import '../styles/Counter.css'


function DisplayCounter(props){
    return(
        <>
            <div className='counter-numb-container'>
            <h1 className='counter-numb'>{props.ctr}</h1>
            </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        ctr:state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter);