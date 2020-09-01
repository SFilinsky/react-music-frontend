import React from 'react';
import { MusicItem } from '../../redux/feature/search/search.reducer';

import './Item.scss';

export const Item = (props: { item: MusicItem }) => (
  <div className={'rm-item'}>
    <div className={'name'}>{props.item.name}</div>
  </div>
);
