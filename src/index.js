import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));