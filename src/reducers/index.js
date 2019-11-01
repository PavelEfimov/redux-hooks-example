import { APP_ACTIONS } from '../constants'

const initialState = {
  count: 0,
  list: []
};

const reducer = (state = initialState , action) => {
    console.log('reducer: ', action);

    switch(action.type) {
        case APP_ACTIONS.INCREMENT:
            return {...state, count: state.count + 1 };
        case APP_ACTIONS.DECREMENT:
            return {...state, count: state.count - 1 };
        case APP_ACTIONS.RESET:
            return {...state, count: 0 };
        case APP_ACTIONS.ADD_LIST:
            return { ...state, list: [...state.list, action.payload]};
        default:
            return state;
    }
};

export default reducer;