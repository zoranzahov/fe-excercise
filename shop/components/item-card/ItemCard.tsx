import React, { FC } from "react";

import styles from "./ItemCard.module.scss";

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  return (
    <div className={styles.carCard}>
      <h2 className={styles.carTitle}>
        {car.make} {car.model}
      </h2>
      <p className={styles.carYear}>Year: {car.year}</p>
      <p className={styles.carPrice}>Price: ${car.price}</p>
      <p className={styles.carColor}>Color: {car.color}</p>
      <p className={styles.carMileage}>Mileage: {car.mileage} miles</p>
      <p className={styles.carTransmission}>Transmission: {car.transmission}</p>
    </div>
  );
};

export default CarCard;
