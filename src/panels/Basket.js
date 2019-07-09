import React from 'react';
import PropTypes from 'prop-types';
import {
	Panel,
	Group,
	PanelHeader,
	View,
	List,
	Avatar,
	Cell,
	Button,
	Div
} from '@vkontakte/vkui';
import BasketItem from '../components/BasketItem';
import BasketSumAndPay from '../components/BasketSumAndPay';
import './Basket.css';

const Basket = ({ id, popout, items, fetchedUser, personalCard, showAddressBtn, getPersonalAddress, activeModal, setPaymentModal }) => (
	<View id={id} activePanel={id} popout={popout} modal={activeModal}>
		<Panel id={id}>
			<PanelHeader>Корзина</PanelHeader>
			<Group title='Товары в корзине'>

				<List>
					{fetchedUser && <Cell
						className='UserInfo'
						size='l'
						description={personalCard ? personalCard.address['specified_address'] : 'Адрес не указан'}
						asideContent={personalCard ? personalCard.email : 'Почта не указана'}
						bottomContent={showAddressBtn && <Button onClick={getPersonalAddress} level='tertiary'>{personalCard && personalCard.address ? 'Добавить адрес' : 'Изменить адрес'}</Button>}
						before={<Avatar src={fetchedUser['photo_100']} />}
					>
						{fetchedUser['first_name']} {fetchedUser['last_name']}
					</Cell>}
					{items.length > 0 ?
						items.map((bike) =>
							<BasketItem key={`basketcart${bike.id}`} bike={bike} />)
						:
						<Div>
							<h3>Корзина пока пуста</h3>
						</Div>
					}
					<BasketSumAndPay onPay={setPaymentModal} isDisabled={!items.length} total={items.map(bike => bike.count * parseInt(bike.price, 10)).reduce((a, b) => a + b, 0)} />
				</List>
			</Group>
			{popout}
		</Panel>
	</View>
);

Basket.propTypes = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object),
	popout: PropTypes.element,
	fetchedUser: PropTypes.object,
	showAddressBtn: PropTypes.bool,
	activeModal: PropTypes.element,
	setPaymentModal: PropTypes.func,
};

export default Basket;
