import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';
import { Provider } from 'react-redux';
import { store } from './src/store.js';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './src/styles/global.js';

const app = document.getElementById('app');
const root = createRoot(app);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
