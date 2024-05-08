import React, { FC } from 'react';
import styles from "./cartComp.module.css";
import { ProductType } from '../../Types/Types';

interface CartComponentProps {
  card: ProductType;
  onClick: (productId: string | number) => void;
}

const CartComponent: FC<CartComponentProps> = ({ card, onClick }) => {
  const handleDelete = () => {
    onClick(card.id+'');
    console.log('лох!');
    
  };

  return (
    <div>
      <section className={styles.card}>
        <img src={card.image} alt="" />
        <div className="">
          <span>{card.category}</span>
          <h3>{card.title}</h3>
        </div>
        <span className={styles.price}>{card.price}</span>
        <button onClick={handleDelete} className={styles.delete}>Удалить</button>
      </section>
    </div>
  );
};

export default CartComponent;
