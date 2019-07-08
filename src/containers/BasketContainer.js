import React from 'react';
import PropTypes from 'prop-types';
import Basket from '../panels/Basket';
import { getBicycleById } from '../data/data';

class BasketContainer extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			popout:  '',
		}
	}

	render() {
		const { id, addToBasket, basket } = this.props;
		const items = Object.keys(basket).map((item) => {
			const bikeId =parseInt(item, 10)
			let bicycle = getBicycleById(bikeId);
			bicycle.count = basket[bikeId];
			return bicycle;
		});
		return <Basket items={items} basket={basket} addToBasket={addToBasket} id={id} />;
	}
}

BasketContainer.propTypes = {
	id: PropTypes.string.isRequired,
	addToBasket: PropTypes.func,
	basket: PropTypes.object,
};

export default BasketContainer;
