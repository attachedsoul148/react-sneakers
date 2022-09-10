import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import CartItem from "./CartItem"
import style from "./Cart.module.scss"

const CartModal = ({ closeHandler, cartItems, onRemoveCartItem, onOrder }) => {
  const [payCount , setPayCount] = useState(0)
  useEffect(() => {
    const sum = cartItems.reduce((acc , el) => acc += el.price , 0)
    setPayCount(sum)
  } , [cartItems])
  return (
    <div className={style.overlay} onClick={closeHandler}>
      <div className={style.overlayBlock} onClick={(e) => e.stopPropagation()}>
        <h2>
          Cart
          <img
            src="/images/remove.svg"
            alt="Remove"
            className="removeBtn"
            onClick={closeHandler}
          />
        </h2>
        <div className={style.cartItems}>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.title}
              item={cartItem}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
        </div>
        <div className={style.overlayTotalBlock}>
          <div className={style.overlayTotalBlockItem}>
            <span>Total:</span>
            <div></div>
            <b>{Math.ceil(payCount+payCount/100*5)}$</b>
          </div>
          <div className={style.overlayTotalBlockItem}>
            <span>Tax 5%:</span>
            <div></div>
            <b>{Math.ceil(payCount/100*5)}$</b>
          </div>
          <button onClick={onOrder}>
            Checkout
            <img width={14} height={12} src="/images/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

CartModal.propTypes = {
  closeHandler: PropTypes.func,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      liked: PropTypes.bool,
      selected: PropTypes.bool,
      price: PropTypes.number,
    })
  ),
  onRemoveCartItem: PropTypes.func,
  onOrder: PropTypes.func,
}
export default CartModal
