import React from 'react';
import PropTypes from 'prop-types';
import { Div, Button } from '@vkontakte/vkui';
import Icon24MarketOutline from '@vkontakte/icons/dist/24/market_outline';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import './BicycleCard.css';

const BicycleCard = ({ id, name, pic, price, onItemSelect, addToBasket, isInBasket }) => (
	<Div className='BicycleCard'>
		<div className='BicycleCard__Photo' onClick={() => onItemSelect(id)}>
			<img src={pic} alt={`Bicycle ${name}`}/>
		</div>
		<div className='BicycleCard__Info' onClick={() => onItemSelect(id)}>
			<h3 className='BicycleCard__Name'>{name}</h3>
		</div>
		<div className='BicycleCard__Footer'>
			<div className='Price' onClick={() => onItemSelect(id)}>
				<h4 className='Price__Value'>{price}₽</h4>
			</div>
			<div className={`BuyBtn ${isInBasket ? 'BuyBtn--InBasket' : ''}`}>
				<Button onClick={() => addToBasket(id)} before={isInBasket ? <Icon24Market fill='var(--white)' /> : <Icon24MarketOutline />} size="xl" level="secondary">Купить</Button>
			</div>
		</div>
	</Div>
);

BicycleCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	onItemSelect: PropTypes.func.isRequired,
};

export default BicycleCard;
