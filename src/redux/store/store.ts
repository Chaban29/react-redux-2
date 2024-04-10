import { createStore, applyMiddleware, Reducer } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from '../rootReducer/rootReducer';

export const store = createStore(
  rootReducer as Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
