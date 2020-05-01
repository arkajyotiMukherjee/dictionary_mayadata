import * as actionTypes from '../../actionTypes';

const initialState = {
  id: null,
  word: null,
  meaning: null,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_WORD:
      if (action.payload !== null) {
        return {
          ...state,
          id: action.payload.id,
          word: action.payload.word,
          meaning: action.payload.meaning,
        };
      } else {
        return {
          ...state,
          id: null,
          word: null,
          meaning: null,
        };
      }
    default:
      return {
        ...state,
      };
  }
}
