import React from 'react';
import PropTypes from 'prop-types';
import { Button, Cell } from '@vkontakte/vkui';

const BasketSumAndPay = ({ total }) => (
	<Cell
		className='BasketSum'
		description={<span className='BasketSum__Price'>{total}₽</span>}
		bottomContent={<Button size='xl' level='commerce'>Оплатить</Button>}
		size='l'
	>
		Итого:
	</Cell>
);

BasketSumAndPay.propTypes = {
	total: PropTypes.number.isRequired,
};

export default BasketSumAndPay;
