import math from 'mathjs';

import {
    BUTTON_PUSHED,
} from './constants';

const initialState = {
    currentValue: 0,
}


const handleAll = (val, state) => {
    state.currentValue += val;
    return state;
}

const handleEq = (state) => {
    try {
        state.currentValue = math.eval(state.currentValue);
    } catch (e) {
        console.log(e);
    }
    return state;
}

const calButtonContainerReducer = (state = initialState, action) => {
    switch(action.type){
        case BUTTON_PUSHED:
            let newState = {
                ...state
            }

            if(action.value === '='){
                newState = handleEq(newState);
            }else if(action.value === 'C'){
                newState.currentValue = 0;
            }else{
                newState = handleAll(action.value, newState);
            }

            return  newState;
        default:
            return state;
    }
}

export default calButtonContainerReducer;