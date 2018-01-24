import {
    BUTTON_PUSHED,
} from './constants';

export const buttonPushed = (value) => {
    return ({
        type: BUTTON_PUSHED,
        value,
    });
}