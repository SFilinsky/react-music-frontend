import { AppState } from '../../redux/app.state';
import { SearchSelectors } from '../../redux/feature/search/search.selector';
import React from 'react';
import { connect } from 'react-redux';

import './ItemList.scss';
import { Item } from '../item/Item';

const ItemList = (props: PropsFromConnector & {}) => {
  if (props.items && props.items.length !== 0) {
    return (
      <div className={'rm-item-list'}>
        {props.items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    );
  }

  return <div className={'rm-item-list rm-item-list-empty'}>No items</div>;
};

const mapState = (state: AppState) => ({
  items: SearchSelectors.getItems(state),
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

// @ts-ignore
export default connector(ItemList);
