export interface CardData {
  image: string;
  title: string;
  price: string;
  category: string;
  [key: string]: string | number | undefined;
}

// ! register
export interface UserType {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm?: string;
  id?: number;
  cart?:CardData[]
  [key: string]: string | number | undefined | CardData[];
}

// ! login
export type LoginType = {
  email: string;
  password: string;
  [key: string]: string;
};

  export interface ProductType {
    image: string;
    title: string;
    price:string;
    category:string;
    [key: string]: string | number | undefined;
  }

