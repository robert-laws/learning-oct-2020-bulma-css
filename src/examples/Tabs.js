import React, { useState } from 'react';

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('product-details');

  const handleClick = (event) => {
    setSelectedTab(event.target.name);
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
            </div>
          </div>
          <div className='column is-5-tablet'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, in, laboriosam molestias eos, culpa harum quia
            impedit doloribus ad sint obcaecati tenetur recusandae tempore
            voluptate!
          </div>
        </div>
      </div>
    </section>
  );
};
