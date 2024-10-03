import React, { FC, useEffect, useState } from 'react';

import ItemCard from '../item-card';
import styles from './content.module.scss';

const Content: FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://localhost:3000/api/latest-cars');

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
    <div role='content' className={styles.body}>
      {cars.map((car, idx) => (
        <div key={idx}>
          <ItemCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default Content;
