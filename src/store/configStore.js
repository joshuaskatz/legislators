import React from 'react';
import { combineReducers, createStore } from 'redux';
import legislatorsReducer from '../reducers/legislators';

const configStore = () => {
	const store = createStore(
		combineReducers({
			legislators: legislatorsReducer
		})
	);
	return store;
};

export default configStore;
