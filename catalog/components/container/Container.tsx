import React, { FC } from "react";
import dynamic from "next/dynamic";

import styles from "./Container.module.scss";

interface Props {
  cars: Car[];
}

const ItemCard = dynamic(() => import("shop/item-card"));

const Container: FC<Props> = ({ cars }) => {
  return (
    <div className={styles.container}>
      {cars.map((car, idx) => (
        <div key={idx}>
          <ItemCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default Container;
