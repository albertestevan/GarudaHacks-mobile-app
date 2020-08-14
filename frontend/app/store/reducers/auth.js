import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  token: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch( action.type ) {
    case 'AUTHENTICATE':
      return {
        token: action.token,
        isLoading: false,
      };
    case 'RETRIEVE_TOKEN': 
      return {
        token: action.token,
        isLoading: false,
      };
    case 'LOGIN': 
      return {
        token: action.token,
        isLoading: false,
      };
    case 'LOGOUT': 
        return initialState;
    case 'REGISTER': 
      return {
        token: action.token,
        isLoading: false,
      };
    default:
      return state;
  }
  // switch (action.type) {
  //   case AUTHENTICATE:
  //     return {
  //       token: action.token,
  //       userId: action.userId
  //     };
  //   case LOGOUT:
  //     return initialState;
  //   case SIGNUP:
  //     return {
  //       token: action.token,
  //       userId: action.userId
  //     };
  //   default:
  //     return state;
  // }
};
