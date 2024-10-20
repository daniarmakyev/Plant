import React, { FC, useEffect, useState, useRef, ChangeEvent } from "react";
import styles from "./catalog.module.css";
import { useAppDispatch, useAppSelector } from "../../Consts/Consts";
import { getProducts } from "../../store/actions/product.action";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { ProductType } from "../../Types/Types";
import ReactPaginate from "react-paginate";

const initialFilters = {
  ficus: false,
  palms: false,
  succulents: false,
};

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const catalogEndRef = useRef<HTMLDivElement>(null);

  const searchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const idd = localStorage.getItem("currentuser");

  const products = useAppSelector((state) => state.products.data.data);
  const { pages } = useAppSelector((state) => state.products.data);

  const [filters, setFilters] = useState(initialFilters);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const latestProducts = useRef<ProductType[]>(products);

  useEffect(() => {
    latestProducts.current = products;
  }, [products]);

  useEffect(() => {
    dispatch(getProducts(currentPage + 1)).then(() => {
      const filtered = latestProducts.current.filter((item) => {
        if (!filters.ficus && !filters.palms && !filters.succulents) return true;
        if (filters.ficus && item.category === "Фикусы") return true;
        if (filters.palms && item.category === "Пальмы") return true;
        if (filters.succulents && item.category === "Суккуленты") return true;
        return false;
      });
      setFilteredProducts(filtered);
    });
  }, [dispatch, filters, currentPage]);

  const handleFilterChange = (filter: "ficus" | "palms" | "succulents") => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  const filteredProductsToDisplay = searchData
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchData.toLowerCase())
      )
    : filteredProducts;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
      <div className={styles.catalog}>
        <aside className={styles.sidebar}>
          <h3>Поиск</h3>
          <input
            type="text"
            className="auth__input"
            value={searchData}
            onChange={searchValueChange}
            placeholder="Поиск..."
            onClick={(e) => e.stopPropagation()}
            id="search"
          />
          <h3>Категории</h3>
          <ul>
            <li>
              <label>
                Фикусы
                <input
                  type="checkbox"
                  checked={filters.ficus}
                  onChange={() => handleFilterChange("ficus")}
                />
              </label>
            </li>
            <li>
              <label>
                Пальмы
                <input
                  type="checkbox"
                  checked={filters.palms}
                  onChange={() => handleFilterChange("palms")}
                />
              </label>
            </li>
            <li>
              <label>
                Суккуленты
                <input
                  type="checkbox"
                  checked={filters.succulents}
                  onChange={() => handleFilterChange("succulents")}
                />
              </label>
            </li>
          </ul>
          {idd === "3" && (
            <Link className={styles.addLink} to={"/addProduct"}>
              Добавить Растение
            </Link>
          )}
        </aside>
        <div className={styles.catalogList}>
          {filteredProductsToDisplay.length ? (
            filteredProductsToDisplay.map((item) => <Card key={item.id} card={item} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div ref={catalogEndRef}></div>
      <ReactPaginate
        className={styles.paginate}
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="< previous"
        onPageChange={handlePageClick}
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        disabledClassName={styles.disabled}
      />
    </>
  );
};

export default Catalog;
