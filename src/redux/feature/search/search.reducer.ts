import { AnyAction } from 'redux';
import { SearchActionTypes } from './search.action';

export interface SearchState {
  query: string;
  requestController: AbortController | null;
}

export const initialSearchState: SearchState = {
  query: '',
  requestController: null,
};

const setQuery = (state: SearchState, query: string): SearchState => ({
  ...state,
  query,
});

const setController = (state: SearchState, requestController: AbortController): SearchState => ({
  ...state,
  requestController,
});

export const searchReducer = (state: SearchState = initialSearchState, action: AnyAction) => {
  switch (action.type) {
    case SearchActionTypes.setQuery:
      return setQuery(state, action.payload.query);
    case SearchActionTypes.setRequestController:
      return setController(state, action.payload.controller);
    default:
      return state;
  }
};
