import { AppState } from '../../redux/app.state';
import { connect } from 'react-redux';
import { SearchThunks } from '../../redux/feature/search/search.action';
import { InputGroup } from '@blueprintjs/core';
import React from 'react';
import { SearchSelectors } from '../../redux/feature/search/search.selector';

import './SearchField.scss';

const SearchField = (props: PropsFromConnector & {}) => (
  <InputGroup
    className={'rm-search-field'}
    type={'text'}
    value={props.query}
    placeholder={'Enter some query'}
    onChange={(event: any) => props.doQuery({ query: (event.target as HTMLInputElement).value })}
  />
);

const mapState = (state: AppState) => ({
  query: SearchSelectors.getQuery(state),
});

const mapDispatch = {
  doQuery: ({ query }: { query: string }) => SearchThunks.doQuery({ query }),
};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

// @ts-ignore
export default connector(SearchField);
