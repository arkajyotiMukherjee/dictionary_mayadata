import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import themeReducer from './themeReducer';
import wordReducer from './wordReducer';
import thunkReducer from './thunkReducer';
import miscReducer from './miscReducer';
import userReducer from './userReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    misc: miscReducer,
    thunk: thunkReducer,
    theme: themeReducer,
    word: wordReducer,
    user: userReducer,
  });
