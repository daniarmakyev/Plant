import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserType } from "../../Types/Types";
import { useAppDispatch, useAppSelector } from "../../helpers/Consts";
import { getUsers, registerUser } from "../../store/actions/User.action";
import Input from "../../components/Input/Input";
import styles from "./auth.module.css"

const Register: FC = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Заполните все поля!");
        return;
      }
    }

    if (user.password.length <= 5) {
      alert("Минимальный  пароль от 5 символов!");
      return;
    }

    if (user.password !== user.password_confirm) {
      alert("Пароли не совпадают!");
      return;
    }

    dispatch(getUsers());
    const inDb = users.some((item) => item.email === user.email);
    if (inDb) {
      alert("Этот аккаунт уже зарегестрирован!");
      return;
    }

    dispatch(registerUser(user));
    console.log(user);

    setUser({
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirm: "",
    });
    navigate("/");
  }
  // console.log(user);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.forma}  style={{marginBottom: "130px"}}>
      <h1>Register form</h1>
      {Object.keys(user).map((item, index) => (
        <div key={index}>
          <Input
            onChange={handleChange}
            value={user[item]!.toString()}
            label={item}
            placeholder={item}
            name={item}
          />
        </div>
      ))}
      <button>Зарегестрироваться</button>
      <Link to={'/login'}>Уже есть аккаунт?</Link>
    </form>
  );
};

export default Register;
