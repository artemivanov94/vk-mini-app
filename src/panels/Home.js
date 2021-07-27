import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
	
 

const Home = ({ id, setPanel, fetchedUser, getToken }) => (


	<Panel id={id}>
		<PanelHeader>Тренировки ВКонтакте</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group >
			<Div>
				<Button stretched size="l" mode="secondary" onClick={setPanel} data-to="onboarding">
					Onboarding
				</Button> 
			</Div> 
			<Div> 
				<Button  mode="primary" onClick={getToken}  >
					Get token
				</Button> 
			</Div> 
		</Group> 
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	setPanel: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};



export default Home;
