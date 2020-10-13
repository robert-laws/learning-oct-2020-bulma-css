import React from 'react';
import {
  Text,
  Spacing,
  Navbar,
  Breadcrumbs,
  GridColumns,
  Tabs,
  Card,
  Modal,
} from './examples';

import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <GridColumns />
      <Tabs />
      <section className='section is-hidden-mobile'>
        <div className='container'>
          <h3 className='title has-text-centered is-size-4'>
            Related Products
          </h3>
          <div className='columns mt-5 is-8 is-variable is-centered'>
            <div className='column is-4-tablet is-3-desktop'>
              <Card />
            </div>
            <div className='column is-4-tablet is-3-desktop'>
              <Card />
            </div>
            <div className='column is-4-tablet is-3-desktop'>
              <Card />
            </div>
          </div>
        </div>
      </section>
      <Modal />
    </div>
  );
}

export default App;
