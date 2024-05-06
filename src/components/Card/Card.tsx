import React, { FC, useEffect } from 'react';
import style from "./card.module.css";
import { CardData, ProductType } from '../../Types/Types';
import { Link } from 'react-router-dom';
import { deleteProductFromApi, getProducts } from '../../store/actions/product.action';
import { useAppDispatch, useAppSelector } from '../../Consts/Consts';

const Card: FC<{ card: ProductType }> = ({ card }) => {
  const dispatch = useAppDispatch();
  const {products} = useAppSelector(state => state.products)
  const handleDelete = async () => {
    if (card.id !== undefined) {
      dispatch(deleteProductFromApi(card.id.toString()));
       dispatch(getProducts())
       window.location.reload();
    } else {
      console.error('ID is undefined');
    }

  };


  return (
    <section className={style.card}>
      <img src={card.image} alt="" />
      <span>{card.category}</span>
      <h3>{card.title}</h3>
      <span className={style.price}>{card.price}</span>
      <Link to={`/editPage/${card.id}`} className={style.Edit}>Редактировать</Link>
      <button className={style.delete} onClick={handleDelete}>Удалить</button>
    </section>
  );
};

export default Card;

