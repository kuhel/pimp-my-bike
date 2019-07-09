import React from 'react';
import PropTypes from 'prop-types';
import Basket from '../panels/Basket';
import ModalPay from '../components/ModalPay';
import { getBicycleById } from '../data/data';
import { isWeb } from '../utils/env';

class BasketContainer extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			popout:  null,
			activeModal: null,
		}
	}

	setActiveModal = (activeModal) => {
		activeModal = activeModal || null;
		this.setState({
			activeModal
		});
	}

	setPaymentModal = () => this.setActiveModal('money-send');

	render() {
		const { id, addToBasket, basket, fetchedUser, personalCard, getPersonalAddress } = this.props;
		const items = Object.keys(basket).map((item) => {
			const bikeId =parseInt(item, 10)
			let bicycle = getBicycleById(bikeId);
			bicycle.count = basket[bikeId];
			return bicycle;
		});
		return <Basket
				activeModal={<ModalPay activeModal={this.state.activeModal} onClose={() => this.setActiveModal()} paymentRequest={() => console.log('Payment request')} />}
				setPaymentModal={this.setPaymentModal}
				items={items}
				addToBasket={addToBasket}
				id={id}
				fetchedUser={fetchedUser}
				personalCard={personalCard}
				showAddressBtn={!isWeb}
				getPersonalAddress={getPersonalAddress} />;
	}
}

BasketContainer.propTypes = {
	id: PropTypes.string.isRequired,
	addToBasket: PropTypes.func,
	basket: PropTypes.object,
	fetchedUser: PropTypes.object,
};

export default BasketContainer;
