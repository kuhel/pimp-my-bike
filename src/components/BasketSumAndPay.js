import React from 'react';
import PropTypes from 'prop-types';
import { Button, Cell } from '@vkontakte/vkui';

const BasketSumAndPay = ({ total, isDisabled, onPay }) => (
	<Cell
		className='BasketSum'
		description={<span className='BasketSum__Price'>{total}₽</span>}
		bottomContent={<Button onClick={onPay} disabled={isDisabled} size='xl' level='commerce'>Оплатить</Button>}
		size='l'
	>
		Итого:
	</Cell>
);

BasketSumAndPay.propTypes = {
	total: PropTypes.number.isRequired,
	isDisabled: PropTypes.bool.isRequired,
	onPay: PropTypes.func.isRequired,
};

export default BasketSumAndPay;
