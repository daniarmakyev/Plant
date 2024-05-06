import React, { FC, useEffect, useState, useRef } from 'react';
import styles from "./catalog.module.css";
import { useAppDispatch, useAppSelector } from '../../Consts/Consts';
import {  getProducts } from '../../store/actions/product.action';
import { Link, useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { ProductType } from '../../Types/Types';

const initialFilters = {
    ficus: false,
    palms: false,
    succulents: false
};

const Catalog: FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products.slice().reverse()) as ProductType[];

    const [filters, setFilters] = useState(initialFilters);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const latestProducts = useRef(products);

    useEffect(() => {
        latestProducts.current = products;
    }, [products]);

    useEffect(() => {
        dispatch(getProducts()).then(() => {
            const filtered = latestProducts.current.filter(item => {
                if (!filters.ficus && !filters.palms && !filters.succulents) return true;
                if (filters.ficus && item.category === 'Фикусы') return true;
                if (filters.palms && item.category === 'Пальмы') return true;
                if (filters.succulents && item.category === 'Суккуленты') return true;
                return false;
            });
            setFilteredProducts(filtered);
        });
    }, [dispatch, filters]);

    const handleFilterChange = (filter: 'ficus' | 'palms' | 'succulents') => {
        setFilters(prevFilters => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
    };

    

    return (
        <div className={styles.catalog}>
            <aside className={styles.sidebar}>
                <h3>Категории</h3>
                <ul>
                    <li>
                        <label>
                            Фикусы
                            <input
                                type="checkbox"
                                checked={filters.ficus}
                                onChange={() => handleFilterChange('ficus')}
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Пальмы
                            <input
                                type="checkbox"
                                checked={filters.palms}
                                onChange={() => handleFilterChange('palms')}
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Суккуленты
                            <input
                                type="checkbox"
                                checked={filters.succulents}
                                onChange={() => handleFilterChange('succulents')}
                            />
                        </label>
                    </li>
                </ul>
                <Link className={styles.addLink} to={'/addProduct'}>Добавить Растение</Link>
            </aside>
            <div className={styles.catalogList}>
                {filteredProducts.map((item, index) => (
                    <Card key={item.id} card={item} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;


