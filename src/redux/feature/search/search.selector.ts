import { AppState } from '../../app.state';
import { SearchState } from './search.reducer';
import { createSelector } from '@reduxjs/toolkit';

const root = (state: AppState) => state.search;

export const SearchSelectors = {
  root,
  getQuery: createSelector([root], (state: SearchState) => state.query),
  getController: createSelector([root], (state: SearchState) => state.requestController),
};
