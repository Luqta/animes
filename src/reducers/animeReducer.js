import { SET_ANIMES } from '../actions';

export default function(state = {}, action){
    switch(action.type) {
        case SET_ANIMES:
            return action.animes;
        default:
            return state;
    }
}