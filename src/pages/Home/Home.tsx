import React, { useEffect } from 'react';
import styles from "./home.module.css";
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useAppDispatch, useAppSelector } from '../../Consts/Consts';
import { APIPRODUCT, addProduct, getProducts } from '../../store/actions/product.action';
import { ProductType } from '../../Types/Types';

const Home = () => {

  

    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.products);
    useEffect(() => {
      dispatch(getProducts());
    }, []);

    const slicedProduct = products.slice(0,6)

    

    
  return (
    <div className="container">

      <div className={styles.homeTop}>
        <h2>Цветы для вашего дома</h2>
        <p>Растения в кашпо станут красивым и модным дополнением интерьера вашей квартиры или офиса</p>
        <Link to={'/catalog'}>ПЕРЕЙТИ В КАТАЛОГ</Link>
      </div>

      <div className={styles.homeMiddle}>
        <div className={styles.ficus}>
          <Link to={'/'}><img src={require('../../img/ficus.png')} alt="ficus" /></Link>
          <h4>Фикусы</h4>
          <p>Эффектные украшения интерьера</p>
        </div>
        <div className={styles.suculentes}>
          <Link to={"/"}><img src={require('../../img/suculent.png')} alt="suculennti" /></Link>
          <h4>Суккуленты</h4>
          <p>Маленькие и модные</p>
        </div>
        <div className={styles.palms}>
          <Link to={'/'}><img src={require('../../img/palms.png')} alt="palms" /></Link>
          <h4>Пальмы</h4>
          <p>Пышные и неприхотливые пальмы - элегантный предмет декора</p>
        </div>
      </div>

      <div className={styles.homeBottom}>
      <h2>Предложения месяца</h2>
            <div className={styles.cards}>
            {slicedProduct && slicedProduct.map((item, index) => (
        <Card key={index} card={item} />
      ))}
            </div>
      </div>

    </div>
  );
};

export default Home;
