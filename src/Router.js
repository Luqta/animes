import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen'
import AnimesPage from './pages/AnimesPage'
import AnimeDetailPage from './pages/AnimeDetailPage'
import AnimeFormPage from './pages/AnimeFormPage'


const AppNavigator = createStackNavigator({
	'Login': {
		screen: LoginScreen,
		navigationOptions: {
			title: 'Tela de login'
		}
	},
	'Main': {
		screen: AnimesPage
	},
	'AnimeForm':{
		screen: AnimeFormPage,
		navigationOptions: ({ navigation }) => {
			if(navigation.state.params && navigation.state.params.animeToEdit){
				return{
					title:navigation.state.params.animeToEdit.title,
				}
			}
			return{
				title: 'Adicione seu anime'
			};
		}	 
	},
	'AnimeDetail':{
		screen: AnimeDetailPage,
			navigationOptions: ({ navigation }) => {
				const { anime } = navigation.state.params;
				return {
					title: anime.title
				}
			}
		},
},	{
	defaultNavigationOptions: {
		title: "Animes",
		headerTintColor: '#cccccc',
		headerStyle: {
			backgroundColor: '#3b0087',
			borderBottomWidth: 1,
			borderBottomColor: '#20004a'
		},
		headerTitleStyle: {
			color: '#cccccc',
			fontSize: 25,

			flex: 1,
			textAlign: 'center'
		}
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

