import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className="container">
      <NavLink to={"/"} className={styles.plant}>
        plant
      </NavLink>

      <NavLink to={"/"} className={styles.catalog}>
        Каталог
      </NavLink>

      <NavLink to={"/"} className={styles.sovety}>
        Советы по уходу
      </NavLink>

      <NavLink to={"/"} className={styles.oplata}>
        Оплата и доставка
      </NavLink>

      <NavLink to={"/"} className={styles.contact}>
        Контакты
      </NavLink>

      <Link to={"/"} className={styles.search}>
        <svg
          width="27.000000"
          height="27.000000"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xmlnslink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Поиск на сайте"
            d="M10.27 3.05e-5C15.94 3.05e-5 20.54 4.59 20.54 10.27C20.54 15.94 15.94 20.54 10.27 20.54C4.59 20.54 0 15.94 0 10.27C0 4.6 4.6 0 10.27 0L10.27 0L10.27 3.05e-5ZM10.27 18.16C14.63 18.16 18.16 14.63 18.16 10.27C18.16 5.91 14.63 2.37 10.27 2.37C5.91 2.37 2.37 5.91 2.37 10.27C2.38 14.63 5.91 18.16 10.27 18.16L10.27 18.16L10.27 18.16ZM25.31 27L15.67 17.35L17.35 15.67L27 25.31L25.31 27Z"
            fill="#000000"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </Link>

      <Link to={"/"} className={styles.vector}>
        <svg
          width="27.000000"
          height="27.000000"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xmlnslink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M13.5 0C17.86 0 21.41 3.38 21.41 7.55C21.41 11.73 17.86 15.11 13.5 15.11C9.13 15.11 5.58 11.73 5.58 7.55C5.59 3.38 9.13 0 13.49 0L13.5 0ZM13.5 12.87C16.57 12.87 19.06 10.49 19.06 7.55C19.06 4.62 16.57 2.24 13.5 2.24C10.42 2.24 7.93 4.62 7.93 7.55C7.94 10.49 10.43 12.86 13.49 12.87L13.49 12.87L13.5 12.87ZM24.68 26.01L24.25 23.7C23.28 18.8 18.84 15.14 13.5 15.14L13.49 15.14C8.16 15.14 3.71 18.79 2.75 23.62L2.74 23.69L2.31 25.98L0 25.58L0.43 23.28C1.61 17.33 7.01 12.89 13.49 12.89L13.5 12.89L13.5 12.89C19.99 12.89 25.39 17.34 26.55 23.22L26.56 23.3L27 25.61L24.68 26.01Z"
            fill="#000000"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </Link>

      <Link to={"/"} className={styles.corzina}>
        <svg
          width="26.000000"
          height="26.000000"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xmlnslink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Корзина"
            d="M10.23 19.36C12.09 19.37 13.59 20.84 13.58 22.65C13.56 24.45 12.04 25.9 10.18 25.88C8.31 25.87 6.81 24.39 6.83 22.59C6.84 20.79 8.36 19.34 10.23 19.36ZM10.19 23.64C10.78 23.64 11.25 23.19 11.26 22.63C11.26 22.06 10.79 21.6 10.21 21.6C9.63 21.59 9.15 22.05 9.15 22.61C9.14 23.17 9.61 23.64 10.19 23.64ZM20.2 19.44C22.06 19.45 23.56 20.92 23.55 22.73C23.53 24.53 22.01 25.98 20.14 25.96C18.28 25.95 16.78 24.48 16.79 22.67C16.81 20.87 18.33 19.42 20.2 19.44L20.2 19.44ZM20.16 23.72C20.75 23.73 21.22 23.27 21.23 22.71C21.23 22.14 20.76 21.68 20.18 21.68C19.6 21.67 19.12 22.13 19.11 22.69C19.11 23.26 19.58 23.72 20.16 23.72ZM20.16 21.68L8.55 21.58C6.38 21.57 4.64 19.85 4.65 17.76C4.67 16 5.92 14.53 7.6 14.11L7.63 14.1L4.43 3.74C4.15 2.88 3.34 2.27 2.38 2.26L-0.72 2.24L-0.7 0L2.41 0.02C4.4 0.04 6.08 1.31 6.64 3.05L6.65 3.08L6.65 3.09L10.71 16.25L8.59 16.23C7.71 16.23 6.98 16.92 6.97 17.78C6.97 18.63 7.68 19.33 8.57 19.34L20.17 19.44L20.16 21.68ZM23.31 16.35L9.14 16.24L9.16 14L21.58 14.1L23.57 7.58L23.57 6.72L7.01 6.59L7.03 4.34L25.91 4.5L25.88 7.92L23.31 16.35Z"
            fill="#000000"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Header;
