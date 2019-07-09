import React from 'react';
import connect from '@vkontakte/vkui-connect-promise';
import { Spinner } from '@vkontakte/vkui';
import { APP_ID } from './config'
import MainScreen from './MainScreen';
import { isWeb, isDev } from './utils/env';
import '@vkontakte/vkui/dist/vkui.css';
import './main.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			personalCard: null,
			token: '',
		};
	}

	componentDidMount() {
		connect.send('VKWebAppGetUserInfo', {})
			.then((e) => {
				setTimeout(() => {
					console.log(e.data);
					this.setState({ fetchedUser: e.data });
				}, 1000);
			})
			.catch(() => this.setState({ fetchedUser: null }));
		connect.send('VKWebAppGetAuthToken', { 'app_id': APP_ID, 'scope': '' })
			.then((e) => {
				this.setState({ token: e.data.access_token });
			})
			.catch(() => this.setState({ tokenError: true }));
	}

	getPersonalAddress = () => {
		if (!isWeb) {
			connect.send('VKWebAppGetPersonalCard', {type: ['phone', 'email', 'address']})
				.then((e) => {
					console.log(e.data);
					this.setState({ personalCard: e.data })
				})
				.catch(() => this.setState({ personalCard: null }));
		}
	}

	render() {
		const { fetchedUser, token, personalCard } = this.state;
		if (isDev || fetchedUser) {
			return <MainScreen fetchedUser={fetchedUser} personalCard={personalCard} token={token} getPersonalAddress={this.getPersonalAddress} />;
		} else {
			return <Spinner />;
		}
	}
}

export default App;
