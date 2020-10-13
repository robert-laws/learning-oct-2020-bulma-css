import React, { useState, useEffect } from 'react';

export const Button = ({ text, extraFunction }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading === true) {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  const handleClick = () => {
    if (extraFunction) {
      extraFunction();
    } else {
      setLoading((prev) => !prev);
    }
  };

  return (
    <button
      className={`button is-primary is-medium is-rounded ${
        loading ? 'is-loading' : ''
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
