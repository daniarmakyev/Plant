import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from "./AddProduct.module.css";
import { ProductType } from '../../Types/Types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../Consts/Consts';
import { addProduct } from '../../store/actions/product.action';

const AddProductPage = () => {
    const [productInp, setProductInp] = useState<ProductType>({
        title: "",
        price: "",
        image: "",
        category: ""
    });

    const productInputs = Object.keys(productInp);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        for (let key in productInp) {
          if (!productInp[key]) {
            alert("Some inputs are empty!");
            return;
          }
        }
   
        dispatch(
          addProduct(productInp)    
        );
    
        setProductInp({
            title: "",
            price: "",
            image: "",
            category: ""
        });
        navigate("/catalog");
      }

    function onChanged(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        setProductInp({ ...productInp, [name]: value });
        console.log(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.forma}>
                <h1>Добавить Растение</h1>
                {productInputs.map((item, index) => (
                    <div key={index}>
                        <input
                            onChange={onChanged}
                            value={productInp[item]}
                            placeholder={item}
                            name={item}
                        />
                    </div>
                ))}
                <button type="submit">Добавить Товар</button>
            </form>
        </div>
    );
}

export default AddProductPage;

