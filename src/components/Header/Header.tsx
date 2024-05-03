import React from 'react'
import styles from "./header.module.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={'footer'} >Footer</Link>
    </div>
  )
}

export default Header
