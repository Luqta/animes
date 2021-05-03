import { 
    SET_FIELD, 
    ANIME_SAVED_SUCESS,
    SET_WHOLE_ANIME,
    RESET_FORM
} from '../actions';

const INITIAL_STATE = {
    title: '',
    gender: '',
    rate: 0,
    img64: '',
    description: ''
}

export default function(state = INITIAL_STATE, action){
    switch (action.type){
        case SET_FIELD:
            const newState = {...state};
            newState[action.field] = action.value;
            return newState;
        case SET_WHOLE_ANIME:
            return action.anime;
        case RESET_FORM:
        case ANIME_SAVED_SUCESS:
            return INITIAL_STATE;    
        default:
             return state;
    }
}