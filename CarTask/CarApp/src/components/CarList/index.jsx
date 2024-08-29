import React from 'react';
import CarItem from '../CarItem';
import './index.css';

const CarList = ({ cars, deleteCar, editCar }) => {
  return (
    <div className="car-list">
      <ul>
        {cars.map((car) => (
          <CarItem
            key={car.brand}
            car={car}
            deleteCar={deleteCar}
            editCar={editCar}
          />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
