import * as key from '../types';

const countReducer = (state=0,action) => {
    if(state === undefined) {
        state = 0;
    }
    switch(action.type) {
        case key.INCREASE:
            return state += 1;
        case key.DECREASE:
            return state -=1;
        default:
            return state;
    }
};
export default countReducer;