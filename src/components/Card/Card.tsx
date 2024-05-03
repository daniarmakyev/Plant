import React, { FC } from 'react';
import style from "./card.module.css";
import { CardData, ProductType } from '../../Types/Types';



const Card: FC<{ card: ProductType}> = ({ card }) => {
  return (
    <section className={style.card}>
      <img src={card.image} alt="" />
      <h1>{card.title}</h1>
    </section>
  );
};

export default Card;

