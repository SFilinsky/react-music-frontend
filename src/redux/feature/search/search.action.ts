import { AppState, AppThunkDispatch } from '../../app.state';
import { SearchEndpoints } from '../../../endpoint/search.endpoint';
import { SearchSelectors } from './search.selector';

const key = 'SEARCH';

export const SearchActionTypes = {
  setQuery: `[${key}] Set Query`,
  setRequestController: `[${key}] Set Request Controller`,
};

export const SearchActions = {
  setQuery: ({ query }: { query: string }) => ({
    type: SearchActionTypes.setQuery,
    payload: { query },
  }),
  setRequestController: ({ controller }: { controller: AbortController }) => ({
    type: SearchActionTypes.setRequestController,
    payload: { controller },
  }),
};

export const SearchThunks = {
  doQuery: ({ query }: { query: string }) => (
    dispatch: AppThunkDispatch,
    getState: () => AppState,
  ) => {
    const lastController = SearchSelectors.getController(getState());
    if (lastController) {
      lastController.abort();
    }

    const controller = new AbortController();
    SearchEndpoints.search(query, controller).then(console.log);

    dispatch(SearchActions.setQuery({ query }));
    dispatch(SearchActions.setRequestController({ controller }));
  },
};
