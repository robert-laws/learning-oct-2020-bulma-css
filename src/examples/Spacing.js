import React from 'react';

export const Spacing = ({ children }) => {
  return (
    <div className='container'>
      <section className='section'>
        <h1 className='py-1 my-2'>Hello, Bulma</h1>
        <h1 className='px-1 mx-1'>Hello, Bulma</h1>
        <h1 className='p-2 m-6'>Hello, Bulma</h1>
        <h1 className='ml-1'>Hello, Bulma</h1>
        <div className='section'>
          <p className='container'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            amet natus nihil quos beatae magni necessitatibus consequatur
            ducimus tenetur numquam qui iusto labore hic error odit!
            Perspiciatis vero dolor aliquid eos cumque similique quas ad, beatae
            impedit, ab reiciendis harum?
          </p>
        </div>
        {children}
      </section>
    </div>
  );
};
