import React, { useState } from 'react';
import './index.css';

const CarItem = ({ car, deleteCar, editCar }) => {
  const [editBrand, setEditBrand] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (editBrand) {
      editCar(car.brand, editBrand);
      setEditBrand('');
      setIsEditing(false);
    }
  };

  return (
    <li className="car-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editBrand}
            onChange={(e) => setEditBrand(e.target.value)}
            placeholder="New brand name"
          />
          <button onClick={handleEdit}>Update</button>
        </>
      ) : (
        <>
          {car.brand} - ${car.price}
          <button onClick={() => deleteCar(car.brand)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default CarItem;
