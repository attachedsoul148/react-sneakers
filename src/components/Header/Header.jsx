import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import style from "./Header.module.scss"
import { Link } from "react-router-dom"

const Header = ({ cartHandler , orders }) => {
  const [money , setMoney] = useState(0)
  useEffect(() => {
    const sum = orders.reduce((acc , el) => acc += el.price , 0)
    setMoney(Math.ceil(sum+sum/100*5))
  } , [orders])
  return (
    <header>
      <div className={style.headerLeft}>
        <Link to="/">
          <img width={40} height={40} alt="logo" src="/images/logo.png" />
        </Link>
        <div className={style.headerInfo}>
          <h3>REACT SNEAKERS</h3>
          <p>Best sneakers</p>
        </div>
      </div>
      <div className={style.headerRight}>
        <div className={style.buyInfo}>
          <img
            width={20}
            height={20}
            alt="logo"
            src="/images/buyIcon.svg"
            onClick={cartHandler}
          />
          <span>{money}$</span>
        </div>
        <div style={{ marginRight: "30px" }}>
          <Link to="/favourite">
            <img
              width={20}
              height={20}
              alt="logo"
              src="/images/favourite.png"
            />
          </Link>
        </div>
        <div>
          <Link to="/orders">
            <img width={20} height={20} alt="logo" src="/images/userIcon.svg" />
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  cartHandler: PropTypes.func,
}
export default Header
