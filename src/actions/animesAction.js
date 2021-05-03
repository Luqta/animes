import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_ANIMES = 'SET_ANIMES';
const setAnimes = animes => ({
    type: SET_ANIMES,
    animes,
})

export const watchAnimes = () => {
    const  { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/animes`)
            .on('value', snapshot => {
                const animes = snapshot.val();
                const action = setAnimes(animes);
                dispatch(action)
            })
    }
}

export const deleteAnime = anime => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                "Deletar",
                `Deseja realmente deletar o anime ${anime.title}?`,
                [{
                    text: 'Não',
                    style: 'cancel',// IOS only
                    onPress: () => {
                        resolve( false )
                    },
                },{
                    text: 'Sim',
                    onPress: async () => {
                        const { currentUser } = firebase.auth();
                        try {
                            await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/animes/${anime.id}`)
                                .remove();
                            resolve(true)
                        } catch(e) {
                            reject(e);
                        }
                    },
                }],
                { cancelable: false }
            )
        })
    }
}