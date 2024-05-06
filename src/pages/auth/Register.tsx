import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../Types/Types";
import { useAppDispatch, useAppSelector } from "../../helpers/Consts";
import { getUsers, registerUser } from "../../store/actions/User.action";
import Input from "../../components/Input/Input";

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
        alert("Some inputs are empty!");
        return;
      }
    }

    if (user.password.length <= 5) {
      alert("Min length of password is 5 symbols");
      return;
    }

    if (user.password !== user.password_confirm) {
      alert("Passowrds do not match!");
      return;
    }

    dispatch(getUsers());
    const inDb = users.some((item) => item.email === user.email);
    if (inDb) {
      alert("This email is already exist");
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
    <form onSubmit={handleSubmit} className="forma">
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
      <button>Sign in</button>
    </form>
  );
};

export default Register;
