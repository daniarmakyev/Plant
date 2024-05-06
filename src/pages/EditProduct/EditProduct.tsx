import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from "./editProduct.module.css"
import { ProductType } from '../../Types/Types';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Consts/Consts';
import { editProduct, getOneProduct } from '../../store/actions/product.action';

const EditProduct = () => {
    const [productInputs, setProductInp] = useState<ProductType>({
        image:'',
        category:'',
        price:'',
        title:''
    });
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const { oneProduct } = useAppSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(getOneProduct(id)); 
    }, [dispatch, id]);

    useEffect(() => {
        if (oneProduct) {
            setProductInp(oneProduct); 
        }
    }, [oneProduct]);
    
    function inputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setProductInp({ ...productInputs, [name]: value });
    }
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(editProduct({ id, newObj: productInputs }));
        navigate("/catalog");
        window.location.reload()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.forma}>
                <h1>Редактировать товар</h1>
                {Object.keys(productInputs).map((item, index) => (
                    <div key={index}>
                        <input
                            onChange={inputChange}
                            value={productInputs[item as keyof ProductType]}
                            placeholder={item}
                            name={item}
                        />
                    </div>
                ))}
                <button type="submit">Редактировать</button>
            </form>
        </div>
    );
}

export default EditProduct;