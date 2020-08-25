import React from 'react';
import './main-layout.scss';
import { Card } from '@blueprintjs/core';
import SearchField from '../../../components/search-field/SearchField';

export class MainLayout extends React.Component {
  render() {
    return (
      <div className={'rm-main-layout'}>
        <header>
          <Card>
            Search
            <SearchField />
          </Card>
        </header>
        <div className="content">
          Main
          <SearchField />
        </div>
        <footer>
          <Card>footer</Card>
        </footer>
      </div>
    );
  }
}
