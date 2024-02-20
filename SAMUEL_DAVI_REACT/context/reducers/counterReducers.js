const initialState = {
    count: 5000,
};
/**
 * Reducer function for the counter state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} - The updated state.
 */
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
