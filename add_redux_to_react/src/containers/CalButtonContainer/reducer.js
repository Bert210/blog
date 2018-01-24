import {
    BUTTON_PUSHED,
} from './constants';

const initialState = {
    prevValue: null,
    operator: null,
    currentValue: null,
}

export default calButtonContainerReducer (state = initialState, action) => {
    switch(action.type){
        case BUTTON_PUSHED:
            console.log(action.value);
            return state;
        default:
            return state;
    }
}