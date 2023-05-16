import * as actionTypes from '../actions/actionTypes'

export const incrementCounter=() =>{
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrementCounter = () =>{
    return {
        type: actionTypes.DECREMENT
    }
}

export const addCounter = (value) => {
    return{
        type:actionTypes.ADD,
            payload:value
    }
}

export const subractCounter = (value) => {
    return{
        type:actionTypes.SUBTRACT,
            payload:value
    }
}

export const logOut = () =>{
    return{
        type: actionTypes.ON_LOGOUT
    }
}
