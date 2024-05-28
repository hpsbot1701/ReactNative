import { ADD_TO_CART } from "./constant"
const intialState = [];

export const reducer = (state=intialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
            default:
                return state
    }

}
