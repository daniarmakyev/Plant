import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { LoginType } from "../../Types/Types";
import { useAppDispatch, useAppSelector } from "../../Consts/Consts";
import { getUsers, getCurrentUser } from "../../store/actions/User.action";
import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./auth.module.css"

const Login: FC = () => {
  const [user, setUser] = useState<LoginType>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Заполните все поля!");
        return;
      }
    }

    const foundUser = users.find((item) => item.email === user.email);

    console.log(foundUser);
    if (!foundUser) {
      alert("Такого пользователя нету!");
      return;
    }

    if (foundUser.password !== user.password) {
      alert("Пароль введет не вверно!");
      return;
    }

    localStorage.setItem("currentUser", foundUser.id!.toString());
    dispatch(getCurrentUser(foundUser.id!.toString()));
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
    window.location.reload()
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.forma}>
        <h1>Login form</h1>
        {Object.keys(user).map((item, index) => (
          <div key={index}>
            <Input
              onChange={handleChange}
              value={user[item]}
              label={item}
              placeholder={item}
              name={item}
            />
          </div>
        ))}
        <button>Войти</button>
      </form>
    </div>
  );
};

export default Login;
