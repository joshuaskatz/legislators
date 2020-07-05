const legislatorsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_LEGISLATORS':
			return [ ...state, ...action.legislators ];
		case 'REMOVE_LEGISLATORS':
			return [];
		default:
			return state;
	}
};

export default legislatorsReducer;
