import { combineReducers } from 'redux';

import userReducer from './userReducer';
import animeFormReducer from './animeFormReducer';
import animesReducer from './animeReducer';

export default combineReducers({
	user: userReducer,
	animeForm: animeFormReducer,
	animes: animesReducer,
});