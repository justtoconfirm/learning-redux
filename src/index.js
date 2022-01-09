// External imports
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Local imports
import App from './App';

// Assets
import './index.css';

// Redux Store
const store = createStore(
	composeWithDevTools(applyMiddleware(thunk))
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);