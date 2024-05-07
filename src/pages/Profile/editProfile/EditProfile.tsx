import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../helpers/Consts";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../../store/actions/User.action";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { oneUser } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (oneUser) {
      setFormData(oneUser);
    }
  }, [oneUser]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const idLokal = localStorage.getItem("currentUser");
  const userId = idLokal ? Number(idLokal) : "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser({ id: userId, newData: formData }));
    navigate("/profile");
    window.location.reload();
  };

  // console.log(formData, "user");

  // let filter = Object.keys(formData).filter(
  //   (item) =>
  //     item !== "id" && item !== "password" && item !== "password_confirm"
  // );

  // console.log(filter, "filter");

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.forma}>
        <h1>Редактировать профиль</h1>
        {Object.keys(formData).map((item, index) => (
          <div key={index}>
            <input
              onChange={handleChange}
              value={formData[item as keyof typeof formData]}
              placeholder={item}
              name={item}
            />
          </div>
        ))}
        <button type="submit">Редактировать</button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <h1>Edit Profile</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Name:
  //         <input
  //           type="text"
  //           name="name"
  //           value={formData.name}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Email:
  //         <input
  //           type="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Phone:
  //         <input
  //           type="text"
  //           name="phone"
  //           value={formData.phone}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <label>
  //         Password:
  //         <input
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //         />
  //       </label>
  //       <button type="submit">Save Changes</button>
  //     </form>
  //   </div>
  // );
};

export default EditProfile;
