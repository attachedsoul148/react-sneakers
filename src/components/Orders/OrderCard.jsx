import React from "react"
import style from "./Orders.module.scss"
import PropTypes from "prop-types"

const OrderCard = ({ sneaker }) => {
  return (
    <div className={style.card}>
      <img width={133} height={112} alt="Sneaker" src={sneaker.image} />
      <h5>Men's Sneakers {sneaker.title}</h5>
      <div className={style.cardBottom}>
        <div className={style.cardInfo}>
          <span>PRICE:</span>
          <p>{sneaker.price}$</p>
        </div>
      </div>
    </div>
  )
}

OrderCard.propTypes = {
  sneaker: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
    selected: PropTypes.bool,
    price: PropTypes.number,
  }),
}
export default OrderCard
