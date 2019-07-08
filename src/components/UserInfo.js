import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '@vkontakte/vkui';
import Icon24LinkCircle from '@vkontakte/icons/dist/24/link_circle';
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import dateFormat from '../utils/dateFormat';
import './UserInfo.css';

const Link = ({ date, user, views }) => (
	<Div className='UserInfo'>
		<div className='UserInfo__Avatar'>
			<img src={user.photo_100} alt='Userpic'/>
		</div>
		<div className='UserInfo__Info'>
			<h3 className='UserInfo__name'>{user.first_name} {user.last_name}</h3>
			<div className="LinkInfo">
				<div className='Views'>
					<span className='Views__Icon'>
						<Icon24LinkCircle />
					</span>
					<span className='Views__Number'>{views}</span>
				</div>
				<div className='Date'>
					<span className='Date__Icon'>
						<Icon24Recent />
					</span>
					<span className='Date__Number'>{dateFormat(date * 1000)}</span>
				</div>
			</div>
		</div>
	</Div>
);

Link.propTypes = {
	count: PropTypes.number.isRequired,
};

export default Link;
