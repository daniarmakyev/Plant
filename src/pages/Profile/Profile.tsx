import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { getOneUser } from "../../store/actions/User.action";
import { useAppDispatch, useAppSelector } from "../../Consts/Consts";
import { log } from "console";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { oneUser } = useAppSelector((state) => state.users);

  const idLokal = localStorage.getItem("currentUser");

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getOneUser(idLokal!));
  }, []);

  console.log(user, "user");

  const profileImage =
    "https://kartinki.pics/pics/uploads/posts/2022-09/thumbs/1662405638_3-kartinkin-net-p-ikonka-cheloveka-minimalizm-vkontakte-3.jpg";

    

  return (
   <>
    {oneUser &&  <div className={styles.profileContainer}>
      <h1>Profile Page</h1>
      <div className={styles.profileImage}>
        <img src={profileImage} alt="Profile" />
      </div>
      <div className={styles.profileInfo}>
        <h4>Name: {oneUser.name}</h4>
        <p>
          <span>Email:</span> {oneUser.email}
        </p>
        <p>
          <span>Phone:</span> {oneUser.phone}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={"/editProfile"}>
          <button>Изменить</button>
        </Link>
      </div>
    </div>}
   </>
  );
};

export default Profile;
