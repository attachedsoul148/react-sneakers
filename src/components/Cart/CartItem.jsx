import React from "react"
import style from "./Cart.module.scss"
import PropTypes from "prop-types"

const CartItem = ({ item, onRemoveCartItem }) => {
  return (
    <div className={style.overlayBlockItem}>
      <img width={80} height={70} src={item.image} alt="Icon" />
      <div>
        <p>Men's Sneakers {item.title}</p>
        <b>{item.price}$</b>
      </div>
      <img
        src="/images/remove.svg"
        alt="Remove"
        className="removeBtn"
        onClick={() => onRemoveCartItem(item)}
      />
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
    selected: PropTypes.bool,
    price: PropTypes.number,
  }),
  onRemoveCartItem: PropTypes.func,
}
export default CartItem
