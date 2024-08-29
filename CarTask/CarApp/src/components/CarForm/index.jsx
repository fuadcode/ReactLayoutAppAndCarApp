import React, { useState } from 'react';
import '../CarForm';

const CarForm = ({ addCar }) => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericPrice = parseFloat(price);
    if (brand && numericPrice > 0) {
      addCar(brand, numericPrice);
      setBrand('');
      setPrice('');
      setError('');
    } else {
      setError('Price must be greater than 0');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <input
        type="text"
        placeholder="Car Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0"
      />
      <button type="submit">Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default CarForm;
