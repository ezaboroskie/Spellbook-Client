import * as actionTypes from './actions/actionTypes'

const initialState = {
    count:20,
    isAuthenticated: false
   
}

const reducer = (state = initialState, action)=>{
        switch(action.type){
            case actionTypes.INCREMENT:
                return{
                    ...state,
                    count: state.count +1,
                   
                }
            case actionTypes.DECREMENT:
                return{
                    ...state,
                    count: state.count -1,
       
                }
            case actionTypes.ADD:
                return{
                    ...state,
                    count: state.count + action.payload,

                }
            case actionTypes.SUBTRACT:
                return{
                    ...state,
                    count: state.count - action.payload,

                }
            case actionTypes.ON_LOGIN:
                return{
                    ...state,
                    isAuthenticated: action.payload == null ? false: true
                }
            case actionTypes.ON_LOGOUT:
                return{
                    ...state,
                    isAuthenticated:false 
                }
            default:
                return state
        }
}

export default reducer 