import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const AddAnimeCard = ({ anime, isFirstColumn, onNavigate }) => (
    <TouchableOpacity 
        onPress={onNavigate}    
        style={[
            styles.container,
            isFirstColumn ? styles.FirstColumn : styles.LastColumn
        ]}>
            <View style={styles.card}>
               <Image 
                    source={require('../resources/plusIcon.png')}
                    style={styles.image}
                    resizeMode="stretch"
                />
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
        flex: 1
    },
    FirstColumn:{
        paddingLeft: 10
    },
    LastColumn:{
        paddingRight: 10
    },
    image:{
        width: '100%',
        height: '100%'
    }
});

export default AddAnimeCard;