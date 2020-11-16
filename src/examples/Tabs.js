import React, { useState } from 'react';
import { MessageBox, Spinner } from './';

export const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('product-details');

  const handleClick = (event) => {
    setSelectedTab(event.target.name);
    finishLoading();
  };

  const finishLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-8 is-variable'>
          <div className='column is-7-tablet'>
            <div className='tabs is-boxed'>
              <ul>
                <li
                  className={`${
                    selectedTab === 'product-details' ? 'is-active' : ''
                  }`}
                  onClick={handleClick}
                >
                  <a name='product-details'>Product Details</a>
                </li>
                <li
                  className={`${
                    selectedTab === 'delivery-information' ? 'is-active' : ''
                  }`}
                  onClick={handleClick}
                >
                  <a name='delivery-information'>Delivery Information</a>
                </li>
                <li
                  className={`${
                    selectedTab === 'coffee-links' ? 'is-active' : ''
                  }`}
                  onClick={handleClick}
                >
                  <a name='coffee-links'>Coffee Links</a>
                </li>
                <li
                  className={`${
                    selectedTab === 'spin-demo' ? 'is-active' : ''
                  }`}
                  onClick={handleClick}
                >
                  <a name='spin-demo'>Spinner</a>
                </li>
              </ul>
            </div>
            <div id='tab-content' className='px-2'>
              <div
                id='product-details'
                className={`${
                  selectedTab === 'product-details' ? '' : 'is-hidden'
                }`}
              >
                <h3 className='is-size-5 title'>Product Details</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde, corrupti. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aut repellat impedit voluptatibus.
                </p>
              </div>
              <div
                id='delivery-information'
                className={`${
                  selectedTab === 'delivery-information' ? '' : 'is-hidden'
                }`}
              >
                <h3 className='is-size-5 title'>Delivery Information</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde, corrupti. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aut repellat impedit voluptatibus.
                </p>
              </div>
              <div
                id='coffee-links'
                className={`${
                  selectedTab === 'coffee-links' ? '' : 'is-hidden'
                }`}
              >
                <h3 className='is-size-5 title'>Coffee Links</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde, corrupti. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aut repellat impedit voluptatibus.
                </p>
              </div>
              <div
                id='spin-demo'
                className={`${selectedTab === 'spin-demo' ? '' : 'is-hidden'}`}
              >
                <h3 className='is-size-5 title'>Spinner</h3>
                {loading ? (
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Spinner />
                  </div>
                ) : (
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore reiciendis odio veniam non est. Sapiente aperiam
                    omnis nemo unde quisquam.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='column is-5-tablet'>
            <MessageBox />
          </div>
        </div>
      </div>
    </section>
  );
};
