import React, { useEffect, useState } from 'react';
import styles from "./cart.module.css";
import { useAppDispatch, useAppSelector } from '../../Consts/Consts';
import { addCart, getOneUser, getUsers } from '../../store/actions/User.action';
import { CardData, UserType } from '../../Types/Types';
import CartComponent from './CartComponent';
import { log } from 'console';

const Cart = () => {
  const dispatch = useAppDispatch();
  const id = localStorage.getItem('currentUser');
  const { oneUser, users } = useAppSelector(state => state.users);
  const [cart, setCart] = useState<CardData[]>([]);

  useEffect(() => {
    dispatch(getOneUser(id + ''));
  }, []);

  useEffect(() => {
    console.log("oneUser:", oneUser);
    if (oneUser && oneUser.cart) {
      setCart(oneUser.cart);
    }
  }, [oneUser]);

  const totalPrice = cart.reduce((total, item) => total + +item.price, 0);

  const handleDelete = (productId: string | number) => {
    const updatedCart = cart.filter(item =>  +item.id! !== +productId!);
  
    if (id && oneUser && updatedCart) {
      console.log("updatedCart:", updatedCart);
      dispatch(addCart({ id, user: { ...oneUser, cart: updatedCart } }));
      setCart(updatedCart); 
    } else {
      console.log('ТЫ ЛОХ'); 
    }
  };

  return (
    <div className='container'>
      <div className={styles.cards}>
        {cart.map((item, index) => (
          <CartComponent key={index} card={item} onClick={handleDelete} />
        ))}
        <div className={styles.price}>
          <span>Сумма заказа </span> <span style={{ fontWeight: '700' }}>{totalPrice}</span>
        </div>
        <button className={styles.orderButton}>Заказать</button>
      </div>
    </div>
  );
};

export default Cart;

