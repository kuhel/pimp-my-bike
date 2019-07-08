import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Group, PanelHeader, View, List } from '@vkontakte/vkui';
import BasketItem from '../components/BasketItem';
import BasketSumAndPay from '../components/BasketSumAndPay';
import './Basket.css';

const Basket = ({ id, basket, popout, items }) => (
	<View id={id} activePanel={id} popout={popout}>
		<Panel id={id}>
			<PanelHeader>Корзина</PanelHeader>
			{items.length && <Group title='Товары в корзине'>
				<List>
					{items.map((bike) => <BasketItem key={`basketcart${bike.id}`} bike={bike} />)}
					<BasketSumAndPay total={items.map(bike => bike.count * parseInt(bike.price, 10)).reduce((a, b) => a + b, 0)} />
				</List>
			</Group>}
			{popout}
		</Panel>
	</View>
);

Basket.propTypes = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object),
	popout: PropTypes.oneOf([PropTypes.string, PropTypes.element])
};

export default Basket;
