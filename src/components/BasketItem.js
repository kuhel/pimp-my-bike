import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Cell } from '@vkontakte/vkui';

const BasketItem = ({ bike }) => (
	<Cell
		className='BasketBike'
		photo={bike.pic}
		description={<span className="BasketBike__Price">{bike.price}₽</span>}
		before={<Avatar src={bike.pic} size={80}/>}
		asideContent={<BikeTotal count={bike.count} price={parseInt(bike.price, 10)} />}
		size="l"
	>
		{bike.name}
	</Cell>
);

const BikeTotal = ({ count, price }) => (
	<div>
		<span>x {count} — </span>
		<span className='BasketSum__ItemSum'>
			{count * price}₽
		</span>
	</div>
);

BasketItem.propTypes = {
	bike: PropTypes.object.isRequired,
};

export default BasketItem;
