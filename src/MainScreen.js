import React from 'react';
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import CatalogContainer from './containers/CatalogContainer';
import BasketContainer from './containers/BasketContainer';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon56MarketOutline from '@vkontakte/icons/dist/56/market_outline';
import '@vkontakte/vkui/dist/vkui.css';

class MainView extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			activeStory: 'catalog',
			basket: {},
		};
	}

	addToBasket = (id, count) => {
		this.setState((prevState) => {
			const { basket } = prevState;
			if (basket[id]) {
				basket[id] = count !== undefined ? count : basket[id] + 1;
			} else {
				basket[id] = count !== undefined ? count : 1;
			}
			return {
				...prevState,
				basket,
			}
		})
	}

	isInBasket = (id) => {
		const {basket} = this.state;
		return Boolean(basket[id]);
	}

	onStoryChange = (e) => {
		const story = e.currentTarget.dataset.story;
		this.setState({
			activeStory: story
		});

	}

	render () {
		const { fetchedUser, token, personalCard, getPersonalAddress } = this.props;
		const { activeStory, basket } = this.state;
		return <Epic activeStory={activeStory} tabbar={
			<Tabbar>
				<TabbarItem
					onClick={this.onStoryChange}
					selected={activeStory === 'catalog'}
					data-story='catalog'
					text='Каталог'
				>
					<Icon28Favorite />
				</TabbarItem>
				<TabbarItem
					onClick={this.onStoryChange}
					selected={activeStory === 'basket'}
					data-story='basket'
					text='Корзина'
					label={Object.keys(basket).length ? Object.keys(basket).length : null}
				>
					<Icon56MarketOutline className='Icon--28' />
				</TabbarItem>
			</Tabbar>
		}>
			<BasketContainer id='basket' addToBasket={this.addToBasket} basket={basket} fetchedUser={fetchedUser} personalCard={personalCard} getPersonalAddress={getPersonalAddress} token={token} />
			<CatalogContainer id='catalog' addToBasket={this.addToBasket} isInBasket={this.isInBasket} />
			}
		</Epic>
	}
}

export default MainView;
