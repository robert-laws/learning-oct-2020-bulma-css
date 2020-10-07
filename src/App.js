import React from 'react';
import { Text, Spacing, Navbar, Breadcrumbs } from './examples';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <Spacing>{/* <Text /> */}</Spacing>
    </div>
  );
}

export default App;
