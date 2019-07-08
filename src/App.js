import React from 'react';
import connect from '@vkontakte/vkui-connect-promise';
import { Spinner } from '@vkontakte/vkui';
import { APP_ID } from './config'
import MainScreen from './MainScreen';
import '@vkontakte/vkui/dist/vkui.css';
import './main.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			token: '',
		};
	}

	componentDidMount() {
		connect.send('VKWebAppGetUserInfo', {})
			.then((e) => {
				this.setState({ fetchedUser: e.data });
			})
			.catch(() => this.setState({ fetchedUserError: true }));
		connect.send('VKWebAppGetAuthToken', { 'app_id': APP_ID, 'scope': '' })
			.then((e) => {
				this.setState({ token: e.data.access_token });
			})
			.catch(() => this.setState({ tokenError: true }));
	}

	render() {
		const { fetchedUser, token } = this.state;
		if (true) {
			return <MainScreen fetchedUser={fetchedUser} token={token} />;
		} else {
			return <Spinner />;
		}
	}
}

export default App;
