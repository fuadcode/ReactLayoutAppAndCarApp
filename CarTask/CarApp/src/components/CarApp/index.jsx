import React, { useState } from 'react';
import CarForm from '../CarForm';
import CarList from '../CarList';

const CarApp = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('none');

    const addCar = (brand, price) => {
        setCars([...cars, { brand, price }]);
    };

    const deleteCar = (brand) => {
        setCars(cars.filter(car => car.brand !== brand));
    };

    const editCar = (oldBrand, newBrand) => {
        setCars(cars.map(car =>
            car.brand === oldBrand ? { ...car, brand: newBrand } : car
        ));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const filteredCars = cars.filter(car =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCars = filteredCars.sort((a, b) => {
        if (sortOrder === 'price') {
            return a.price - b.price;
        } else if (sortOrder === 'brand') {
            return a.brand.localeCompare(b.brand);
        }
        return 0;
    });

    return (
        <div className="car-app">
            <CarForm addCar={addCar} />
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search by brand"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select onChange={handleSortChange}>
                    <option value="none">Sort by</option>
                    <option value="price">Price</option>
                    <option value="brand">Brand</option>
                </select>
            </div>
            <CarList
                cars={sortedCars}
                deleteCar={deleteCar}
                editCar={editCar}
            />
        </div>
    );
};

export default CarApp;
