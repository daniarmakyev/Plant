import React, { useEffect, useState } from 'react'
import styles from "./profile.module.css"
import { getOneUser } from '../../store/actions/User.action'
import { useAppDispatch, useAppSelector } from '../../Consts/Consts'

const Profile = () => {

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
    })

    const idLokal = localStorage.getItem('currentUser')

    const dispatch = useAppDispatch()

    useEffect(() => {

        
        let res:any = null

        dispatch(getOneUser(Number(idLokal))).then((data)=>{
            res = data.payload
            console.log(res);
            
        })

    }, []);
    

    

  return (
    <div>
      
    </div>
  )
}

export default Profile
