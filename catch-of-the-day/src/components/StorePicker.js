import React from 'react';

export default () => (
  <form className="store-selector">
    <h2>Please enter a store</h2>
    <input type="text" required placeholder="Store name" />
    <button type="submit">Visit store</button>
  </form>
);
