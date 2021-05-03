import firebase from '@firebase/app';
import "@firebase/database";

export const SET_WHOLE_ANIME = 'SET_WHOLE_ANIME';
export const setWholeAnime = anime => ({
    type: SET_WHOLE_ANIME,
    anime
})

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return{
        type: SET_FIELD,
        field,
        value,
    }
}

export const ANIME_SAVED_SUCESS = 'ANIME_SAVED_SUCESS';
export const animeSavedSucess = () => ({
    type: ANIME_SAVED_SUCESS,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
});

export const saveAnime = anime => {
const { currentUser } = firebase.auth();
    return async dispatch => {
        const db = firebase.database();

        if (anime.id) {
            await db.ref(`/users/${currentUser.uid}/animes/${anime.id}`)
                .set(anime)
        } else{
            await db.ref(`/users/${currentUser.uid}/animes`)
                .push(anime)
        }
        
        dispatch(animeSavedSucess())
    }
} 