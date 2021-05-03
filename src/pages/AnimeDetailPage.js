import React from 'react';
import { 
    ScrollView, 
    Text,
    View, 
    StyleSheet, 
    Image,
    Dimensions, 
    Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Line from '../components/Line';
import LongText from '../components/LongText';

import { connect } from 'react-redux';
import { deleteAnime } from '../actions';

class SerieDetailPage extends React.Component {
    render(){
        const { navigation } = this.props;
        const { anime } = navigation.state.params;
        console.log('a:', anime)

        return(
            <ScrollView style={styles.background}>
                <StatusBar style="inverted" />

                <View style={styles.imageBase}>
                {
                    anime.img64
                    ?<Image 
                        style={styles.image}
                        source={{
                            uri: `data:image/jpeg;base64,${anime.img64}`
                    }}/>
                    :<Image
                        source={require('../resources/imageErrorIcon.png')}
                        style={styles.errorImage}
                        resizeMode="stretch"
                    />
                }
                </View>

                <View style={styles.base}>
                    <Line label="Título" content={anime.title}/>
                    <Line label="Gênero" content={anime.gender}/>
                    <Line label="Nota" content={anime.rate}/>
                    <LongText label="Descrição" content={anime.description}/>
                </View>


                <View style={styles.button}>
                    <Button 
                        color="#3b0087" 
                        title="Editar"
                        onPress={() => {navigation.replace('AnimeForm', { animeToEdit: anime })}}                         
                    />
                </View>

                <View style={styles.button}>
                    <Button 
                        color="red" 
                        title="Remover"
                        onPress={async () => {
                            const hasDeleted = await this.props.deleteAnime(anime);
                            if (hasDeleted){
                                navigation.goBack();
                            }
                        }}                         
                    />
                </View>
            </ScrollView>
        )
    }
}    

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#7f768a'
    },
    image:{
        height: 300,
        width: 300,

        flex: 1,

        borderRadius: 25
    },
    errorImage:{
        width: 300,
        height: 300,
        
        flex: 1
    },
    base:{
        backgroundColor: '#3b0087',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 25
    },
    imageBase:{
        alignItems: 'center',
        flexDirection: 'row',

        marginBottom: 10,
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 10
    },
    button:{
        paddingTop: 10,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 10
    }
})

export default connect(null, { deleteAnime })(SerieDetailPage);