import React from 'react';
import {
    View,  
    Text,
    ScrollView, 
    StyleSheet, 
    TextInput,
    Button,
    KeyboardAvoidingView,
    ActivityIndicator,
    Alert,
    Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import * as Permissions from "expo-permissions";
import * as ImagePicker from 'expo-image-picker';

import FormRow from '../components/FormRow';
import { 
    setField, 
    saveAnime, 
    setWholeAnime, 
    resetForm 
} from '../actions';

class AnimeFormPage extends React.Component{ 
    constructor(props){
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        const { navigation, setWholeAnime, resetForm } = this.props;
        const { params } = navigation.state;
        if(params && params.animeToEdit){
            return setWholeAnime(params.animeToEdit);
        }
        return resetForm();
    }

    onChangeHandler(field, value){
		this.setState({
			[field]: value
		});
	};

    renderButton(){
        if (this.state.isLoading){
        return <ActivityIndicator 
                size="large" 
	            color="#212121"
            />
        }
        
        return(
            <Button 
                color="#3b0087"
                title="Adicionar anime"
                onPress={async() => {
                    this.setState({ isLoading: true});
                    try {
                        const { saveAnime, animeForm, navigation } = this.props;
                        await saveAnime(animeForm);
                        navigation.goBack();
                        console.log('oi', animeForm)
                    } catch (error) {
                        Alert.alert('Erro', 'Algo deu errado!');
                    } finally {
                        this.setState({ isLoading: false});
                    }
                }}
        />)
    }

    async pickImage() {
        console.log('teste teste ele quer botar img');
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
        if(status !== 'granted'){
            Alert.alert('Você precisa permitir o acesso!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 0.2,
            base64: true,
            allowsEditing: true,
            aspect: [1, 1] //Android only
        });

        if(!result.cancelled){
            this.props.setField('img64', result.base64);
        }
    }   

    
    render() {
        const{ animeForm, setField } = this.props    

            return (
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={50} 
                        behavior="height" 
                        enabled
                    >

                <ScrollView style={styles.container}>
                    <StatusBar style="inverted" />
                    <View style={styles.base}>
                        <FormRow first>
                            <TextInput
                                placeholder="Título"
                                style={styles.input}
                                value={animeForm.title}
                                onChangeText={value => setField('title', value)}
                            />
                        </FormRow>

                        <FormRow>
                            <Button 
                                color='#3b0087'
                                title='Selecione uma imagem'
                                onPress={() => this.pickImage()}
                            />
                        </FormRow>  
            
                        <FormRow>
                            <Picker 
                                selectedValue={animeForm.gender}
                                onValueChange={itemValue => setField('gender', itemValue)}>    
            
                                <Picker.Item label="Shounen" value="shounen" />
                                <Picker.Item label="Hentai" value="pornUnsafe" />
                                <Picker.Item label="Ecchi" value="pornSafe" />
                                <Picker.Item label="Comédia" value="comedy" />
                                <Picker.Item label="Ação" value="action" />
                                <Picker.Item label="Drama" value="drama" />
                                <Picker.Item label="Terror" value="horror" />
                            </Picker>
                        </FormRow>

                        <FormRow>
                            <View style={styles.sameRow}>
                                <Text>Nota:</Text>
                                <Text>{animeForm.rate}</Text>
                            </View>
                            <Slider
                                minimumValue={0}
                                maximumValue={100}
                                value={animeForm.rate}
                                onValueChange={value => setField('rate', value)}
                                step={5}
            
                                style={{width: '100%', height: 40}}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                            />
                        </FormRow>
                        
                        <FormRow last>
                        <TextInput
                                placeholder="Descrição"
                                style={styles.input}
                                value={animeForm.description}
                                numberOfLines={5}
                                multiline={true}
                                onChangeText={value => setField('description', value)}
                            />
                        </FormRow>
                    </View>

                <View style={styles.button}>
                    { this.renderButton() }
                </View>

                </ScrollView>
                </KeyboardAvoidingView>
            )
        }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7f768a',
        paddingTop: 5
    },
    input:{
        paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5
    },
    sameRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5
    },
    base:{
        marginLeft: 10,
        marginRight: 10,
		paddingTop: 35,
		paddingBottom: 35,
        backgroundColor: '#3b0087',
        borderRadius: 15
    },
    button:{
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
        paddingBottom: '55%'
    },
    img:{
        width: '100%'
    }
})

function mapStateToProps(state){
    return {
        animeForm: state.animeForm
    }
}

const mapDispatchToProps = {
    setField,
    saveAnime,
    setWholeAnime,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeFormPage);