import React from 'react';
import PropTypes from 'prop-types';
import { ModalCard, ModalRoot } from '@vkontakte/vkui';
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';

const ModalPay = ({ onClose, paymentRequest, activeModal }) => (
	<ModalRoot activeModal={activeModal}>
		<ModalCard
			id='money-send'
			onClose={onClose}
			icon={<Icon56MoneyTransferOutline />}
			title="Оплатить заказ"
			caption="Операция будет совершена через VK Pay"
			actions={[{
				title: 'Оплатить',
				type: 'primary',
				action: () => paymentRequest() && onClose(),
			}]}
		/>
	</ModalRoot>
);

ModalPay.propTypes = {
	onClose: PropTypes.func.isRequired,
	paymentRequest: PropTypes.func.isRequired,
};

export default ModalPay;
