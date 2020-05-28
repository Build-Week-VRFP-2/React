const initialState = {
	isLoading: false,
	projects: null,
};

export const ProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GETPROJ':
			return {
				...state,
				isLoading: true,
			};

		case 'SUCCESS':
			return {
        ...state,
        isLoading: false,
        projects: action.payload,
      };

		default:
			return state;
	}
};
