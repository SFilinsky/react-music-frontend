import React from 'react';
import './main-layout.scss';
import { Card } from '@blueprintjs/core';
import SearchField from '../../../components/search-field/SearchField';
import ItemList from '../../../components/item-list/ItemList';

export class MainLayout extends React.Component {
  render() {
    return (
      <div className={'rm-main-layout'}>
        <header>
          <Card>
            <div>Search</div>
            <SearchField />
          </Card>
        </header>
        <div className="content">
          <div>
            <div>Search Here</div>
            <SearchField />
          </div>
          <ItemList />
        </div>
        <footer>
          <Card>
            <div>Footer</div>
          </Card>
        </footer>
      </div>
    );
  }
}
