import React from 'react';
import { 
	Text,
	View, 
	StyleSheet, 
	TextInput, 
	ActivityIndicator,
	Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FormRow from '../components/FormRow';
import firebase from 'firebase'
import { connect } from 'react-redux';
import { tryLogin } from '../actions';

class LoginPage extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			mail: '',
			password: '',
			isLoading: false,
			message: '',
		}
	}

	componentDidMount(){
		if (firebase.apps.length === 0) {
			firebase.initializeApp({
				apiKey: "AIzaSyBUrCpSlHPFJNp32qJ31ClKlgOR4ooKeHs",
    			authDomain: "serie-a42d3.firebaseapp.com",
    			databaseURL: "https://serie-a42d3-default-rtdb.firebaseio.com",
    			projectId: "serie-a42d3",
    			storageBucket: "serie-a42d3.appspot.com",
    			messagingSenderId: "268486568214",
    			appId: "1:268486568214:web:b199fe979632a941da4837",
    			measurementId: "G-MBCY2ZGBY2"
			});
		};

	}

	onChangeHandler(field, value){
		this.setState({
			[field]: value
		});
	}

	tryLogin(){
		this.setState({ isLoading: true, message: ''});
		const { mail, password } = this.state;

		this.props.tryLogin({ mail, password})
			.then(user => {
				if(user)
					return this.props.navigation.replace('Main');
				this.setState({
					isLoading: false,
					message: ''
				});
			})
			.catch(error => {
				this.setState({ 
					isLoading: false,
					message: this.getMessageByErrorCode(error.code)
				});
			});
	}

	getMessageByErrorCode(errorCode){
		switch(errorCode){
			case 'auth/wrong-password':
				return 'Senha errada!';
			case 'auth/user-not-found':
				return 'Usuário não encontrado!';
			default:
				'Erro desconhecido';
		}
	}
	
	renderMessage(){
		const { message } = this.state;
		if (!message)
			return null;

		return(
			<Text>{message}</Text>
		)			
	}

	renderButton(){
		if(this.state.isLoading)
			return <ActivityIndicator 
				size="large" 
				color="#212121"/>;
		return(
			<Button 
				title="Entrar"
				color= "#3b0087"
				onPress={() => this.tryLogin()}
			/>
		)
	}

	render(){
		return(
			<View style={styles.container}>
			<StatusBar style="inverted" />
				<View style={styles.base}>
					<FormRow first>
						<TextInput
							style={styles.input}
							placeholder="E-mail"
							value={this.state.mail}
							onChangeText={value => this.onChangeHandler('mail', value)}
							keyboardType="email-address"
							autoCapitalize="none" 
						/>
					</FormRow>

					<FormRow last>
						<TextInput 
							style={styles.input}
							placeholder="Senha"
							secureTextEntry
							value={this.state.password}
							onChangeText={value => this.onChangeHandler('password', value)}
						/>
					</FormRow>
				</View>

				<View style={styles.button}>
					{ this.renderMessage() }
					{ this.renderButton() }
				</View>

			</View>
		)
	}
} 

const styles = StyleSheet.create({
	base:{
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
		paddingTop: 35,
		paddingBottom: 35,
		backgroundColor: '#3b0087'
    },
	container:{
		paddingTop:'50%',
		backgroundColor: '#7f768a'
	},
	input:{
		paddingBottom: 5
	},
	background:{
		backgroundColor: '#7f768a'
	},
	button:{
		marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
		paddingBottom: '100%'
	}
})

export default connect (null, { tryLogin })(LoginPage)