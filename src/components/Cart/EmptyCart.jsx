import React from "react"
import style from "./Cart.module.scss"
import PropTypes from "prop-types"

const EmptyCart = ({
  closeHandler,
  image,
  mainText,
  secondaryText,
  isOrderCompleted,
}) => {
  return (
    <div className={style.overlay} onClick={closeHandler}>
      <div className={style.overlayBlock} onClick={(e) => e.stopPropagation()}>
        <h2>Cart</h2>
        <div
          className={isOrderCompleted ? style.orderImgCont : style.cartImgCont}
        >
          <img src={image} alt="Cart" />
        </div>
        <div className={style.emptyOverlayTotalBlock}>
          <div className={style.emptyOverlayTotalBlockItem}>
            {isOrderCompleted ? <h3>{mainText}</h3> : <h2>{mainText}</h2>}
          </div>
          <div className={style.emptyOverlayTotalBlockItem}>
            <p>{secondaryText}</p>
          </div>
          <button onClick={closeHandler}>
            <img
              width={14}
              height={12}
              src="/images/backArrow.png"
              alt="Arrow"
            />
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

EmptyCart.propTypes = {
  onRemoveCartItem: PropTypes.func,
  image: PropTypes.string,
  secondaryText: PropTypes.string,
  mainText: PropTypes.string,
  isOrderCompleted: PropTypes.bool,
}
export default EmptyCart
