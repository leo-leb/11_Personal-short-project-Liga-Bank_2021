import {ActionType} from './action';
import Operations from '../mocks/operations.js';

const initialState = {
  operations: Operations,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      };
    case ActionType.CLEAR_OPERATIONS:
      return {
        ...state,
        operations: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
