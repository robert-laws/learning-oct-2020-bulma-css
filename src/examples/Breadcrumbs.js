import React from 'react';

export const Breadcrumbs = () => {
  return (
    <section className='section pt-4 pb-0'>
      <nav className='breadcrumb has-arrow-separator'>
        <ul className='container'>
          <li>
            <a className='has-text-grey'>Ghost Town</a>
          </li>
          <li>
            <a className='has-text-grey'>Shop</a>
          </li>
          <li className='is-active'>
            <a>Fancy Item One</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
