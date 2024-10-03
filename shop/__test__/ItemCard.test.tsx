import React from 'react';
import { render, screen } from '@testing-library/react';
import CarCard from '@/components/item-card/ItemCard';


it('renders the car information correctly', () => {
const car = {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 25000,
    color: 'Blue',
    mileage: 10000,
    transmission: 'Automatic',
};

render(<CarCard car={car} />);

expect(screen.getByText('Toyota Camry')).toBeInTheDocument();
expect(screen.getByText('Year: 2023')).toBeInTheDocument();
});
