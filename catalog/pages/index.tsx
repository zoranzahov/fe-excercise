import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Container from '@/components/container';

const Header = dynamic(() => import('shop/header'));
const Footer = dynamic(() => import('shop/footer'));

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:3000/api/cars');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data: Car[] = await response.json();
      setCars(data);
    };

    fetchCars().catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <div>
          <h2 className="title">Catalog</h2>
          <Container cars={cars} />
        </div>
        <Footer />
      </div>
    </>
  );
}
