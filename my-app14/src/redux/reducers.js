
import { SET_USER_INFO } from './actions';


const initialState = {
  user: {
    name: 'John Doe',
    status: 'online',
  },
};


export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: {
          name: action.payload.name,
          status: action.payload.status,
        },
      };
    default:
      return state;
  }
}
