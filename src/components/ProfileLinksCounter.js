import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '@vkontakte/vkui';
import Icon24Linked from '@vkontakte/icons/dist/24/linked';
import './ProfileLinksCounter.css';

const Link = ({ count, user }) => (
	<Div className='UserProfile'>
		<div className='UserProfile__Avatar'>
			<img src={user.photo_100} alt='Userpic'/>
		</div>
		<div className='UserProfile__Info'>
			<h3 className='UserProfile__name'>{user.first_name} {user.last_name}</h3>
			<div className='Counter'>
				<span className='Counter__Number'>{count}</span>
				<span className='Counter__Icon'>
					<Icon24Linked />
				</span>
			</div>
		</div>
	</Div>
);

Link.propTypes = {
	count: PropTypes.number.isRequired,
};

export default Link;
