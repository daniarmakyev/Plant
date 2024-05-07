import React, { useEffect, useState } from 'react'
import styles from "./cart.module.css"
import { useAppDispatch, useAppSelector } from '../../Consts/Consts'
import { getOneUser } from '../../store/actions/User.action'
import { CardData } from '../../Types/Types'
import Card from '../../components/Card/Card'

const Cart = () => {

    const dispatch = useAppDispatch()
    const id = localStorage.getItem('currentUser');
    const {oneUser} = useAppSelector(state => state.users)
    const [cart, setCart] = useState<CardData[]>([]);

    useEffect(() => {
      dispatch(getOneUser(id + ''));
    }, []);
    
    useEffect(() => {
      if (oneUser && oneUser.cart) {
        setCart(oneUser.cart);
      }
    }, [oneUser]);

    console.log(cart);
    

  return (
    <div className='container'>
      <div className={styles.cards}>
      {cart.map((item, index) => (
  <Card key={index} card={item} />
))}
            </div>
</div>
  )
}

export default Cart
