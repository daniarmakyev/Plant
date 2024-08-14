import React, { FC, useEffect, useState } from "react";
import style from "./card.module.css";
import { ProductType, UserType } from "../../Types/Types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Consts/Consts";
import {
  deleteProductFromApi,
  getOneProduct,
  getProducts,
} from "../../store/actions/product.action";
import { addCart, getOneUser } from "../../store/actions/User.action";

const Card: FC<{ card: ProductType }> = ({ card }) => {
  const dispatch = useAppDispatch();
  const idd = localStorage.getItem("currentUser");
  const { oneProduct, data } = useAppSelector((state) => state.products);
  const { oneUser } = useAppSelector((state) => state.users);

  const handleDelete = async () => {
    try {
      if (card.id !== undefined) {
        dispatch(deleteProductFromApi(card.id + ""));
        dispatch(getProducts());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [oneProductt, setOneProduct] = useState<ProductType | null>(null);

  const getUser = (id: number) => {
    dispatch(getOneProduct(id.toString()));
    dispatch(getOneUser(idd!));
    setOneProduct(oneProductt);

    if (oneProduct !== null && idd && oneUser !== undefined) {
      const filteredCart = (oneUser!.cart as ProductType[]).filter(
        (item) => item !== null
      );
      const updatedUser = { ...oneUser!, cart: [...filteredCart, oneProductt!] };
      dispatch(addCart({ id: idd! + "", user: updatedUser }));
    }
  };

  useEffect(() => {
    if (oneProduct !== null && oneUser !== null) {
      setOneProduct(oneProduct);
    }
  }, [oneProduct, oneUser]);

  return (
    <section className={style.card}>
      <img src={card.image} alt="" />
      <span>{card.category}</span>
      <h3>{card.title}</h3>
      <span className={style.price}>{card.price}</span>
      {idd === "3" && (
        <>
          <Link to={`/editPage/${card.id}`} className={style.Edit}>
            Редактировать
          </Link>
          <button className={style.delete} onClick={handleDelete}>
            Удалить
          </button>
        </>
      )}
      <button onClick={() => getUser(+card.id!)} className={style.addCart}>
        В корзину
      </button>
    </section>
  );
};

export default Card;
