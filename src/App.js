import React from 'react';
import {
  Text,
  Spacing,
  Navbar,
  Breadcrumbs,
  GridColumns,
  Tabs,
} from './examples';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <GridColumns />
      <Tabs />
    </div>
  );
}

export default App;
