import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Onboarding from './panels/Onboarding';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const setPanel = e => {
		console.log('123',e.currentTarget.dataset.to)
		// setActivePanel(e.currentTarget.dataset.to);
	};

	const getToken = () =>{ 
		bridge.send("VKWebAppGetAuthToken", {"app_id": 7899315, "scope": "friends,status"}).then(data => { 
		console.log(data);
	  })
	}

	return (
		<AdaptivityProvider>
			<AppRoot> 
					<Home id='home' fetchedUser={fetchedUser} setPanel={setPanel} getToken={getToken} />  
				{/* <Onboarding id='onboarding'      /> */}
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
