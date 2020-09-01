import { AnyAction } from 'redux';
import { SearchActionTypes } from './search.action';

export interface MusicItem {
  name: string;
  price: number;
  image: string;
}

export interface SearchState {
  query: string;
  requestController: AbortController | null;
  items: MusicItem[];
}

export const initialSearchState: SearchState = {
  query: '',
  requestController: null,
  items: [],
};

const setQuery = (state: SearchState, query: string): SearchState => ({
  ...state,
  query,
});

const setController = (state: SearchState, requestController: AbortController): SearchState => ({
  ...state,
  requestController,
});

const setItems = (state: SearchState, items: MusicItem[]): SearchState => ({
  ...state,
  items,
});

export const searchReducer = (state: SearchState = initialSearchState, action: AnyAction) => {
  switch (action.type) {
    case SearchActionTypes.setQuery:
      return setQuery(state, action.payload.query);
    case SearchActionTypes.setRequestController:
      return setController(state, action.payload.controller);
    case SearchActionTypes.setItems:
      return setItems(state, action.payload.items);
    default:
      return state;
  }
};
