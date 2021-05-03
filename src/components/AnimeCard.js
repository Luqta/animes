import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const AnimeCard = ({ anime, isFirstColumn, onNavigate }) => (
    <TouchableOpacity 
        onPress={onNavigate}    
        style={[
            styles.container,
            isFirstColumn ? styles.FirstColumn : styles.LastColumn
        ]}>
            <View style={styles.card}>
                {
                    anime.img64
                    ? <Image 
                        source={{
                                uri: `data:image/jpeg;base64,${anime.img64}`
                            }}
                            aspectRatio={1}
                            resizeMode="stretch"
                        />
                    : <Image
                        source={require('../resources/imageErrorIcon.png')}
                        style={styles.errorImage}
                        resizeMode="stretch"
                    />    
                }
                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{anime.title}</Text>
                </View>
            </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width/2
    },
    card: {
        flex: 1,
        borderWidth: 1
    },
    cardTitleWrapper: {
        backgroundColor: '#3b0087',
        
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: .9,

        width: '100%',

        paddingTop: 10,
        paddingBottom: 10,

        paddingLeft: 2.5,
        paddingRight: 2.5,

        alignItems: 'center'
    },
    cardTitle:{
        color: '#cccccc',
        fontSize: 15,
        fontWeight: 'bold'
    },
    FirstColumn:{
        paddingLeft: 10
    },
    LastColumn:{
        paddingRight: 10
    },
    errorImage:{
        width: 100,
        height: 100,
        margin: '25%'
    }
});

export default AnimeCard;