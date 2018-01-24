import {
    BUTTON_PUSHED,
} from './constants';

const initialState = {
    prevValue: 0,
    operator: null,
    currentValue: 0,
}

const calButtonContainerReducer = (state = initialState, action) => {
    switch(action.type){
        case BUTTON_PUSHED:
            let newState = {
                ...state
            }

            switch(action.value){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '.':
                    
                    if(newState.currentValue === 0 || newState.currentValue === "0"){
                        newState.currentValue = "";
                    }
                    newState.currentValue += action.value;
                    break;
                case 'C':
                    newState.prevValue = 0;
                    newState.currentValue = 0;
                    break;
                case '*':
                    if(newState.prevValue === 0){
                        newState.prevValue = newState.currentValue;
                        newState.currentValue = 0;                        
                    }else{
                        newState.currentValue = newState.prevValue * newState.currentValue;
                    }
                default:
                    break;
            }
            return  newState;
        default:
            return state;
    }
}

export default calButtonContainerReducer;