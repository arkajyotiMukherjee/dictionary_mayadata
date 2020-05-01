import * as actions from '../../actionTypes';

const wordState = {
  words: [],
};

const wordReducer = (state = wordState, action) => {
  switch (action.type) {
    case actions.GET_ALL_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default wordReducer;
