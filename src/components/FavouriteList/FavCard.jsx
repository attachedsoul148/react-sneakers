import React from "react"
import style from "./FavouriteList.module.scss"
import PropTypes from "prop-types"

const FavCard = ({ sneaker, onDislikeItem }) => {
  return (
    <div className={style.card}>
      <img
        className={style.likedButton}
        src="/images/heartFilled.svg"
        alt="Like"
        width={32}
        height={32}
        onClick={() => {
          onDislikeItem(sneaker)
        }}
      />
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

FavCard.propTypes = {
  onDislikeItem: PropTypes.func,
  sneaker: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
    selected: PropTypes.bool,
    price: PropTypes.number,
  }),
}
export default FavCard
