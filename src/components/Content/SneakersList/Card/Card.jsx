import React, { useEffect, useState } from "react"
import style from "./Card.module.scss"
import PropTypes from "prop-types"
import ContentLoader from "react-content-loader"

const Card = ({
  sneaker,
  onAddCartItem,
  onRemoveCartItem,
  onLikeItem,
  onDislikeItem,
  cartItems,
  favouriteSneaks,
  isLoading,
}) => {
  const [selected, setSelected] = useState(false)
  const [favourite, setFavourite] = useState(false)
  useEffect(() => {
    if (!isLoading) {
      setSelected(cartItems.some((el) => el.title === sneaker.title))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])
  useEffect(() => {
    if (!isLoading) {
      setFavourite(favouriteSneaks.some((el) => el.title === sneaker.title))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favouriteSneaks])

  return (
    <div className={style.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 -35 150 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <rect x="0" y="125" rx="10" ry="10" width="93" height="15" />
          <rect x="0" y="106" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="162" rx="10" ry="10" width="80" height="24" />
          <rect x="118" y="154" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {favourite ? (
            <img
              className={style.likedButton}
              src="/images/heartFilled.svg"
              alt="Like"
              width={32}
              height={32}
              onClick={() => {
                setFavourite(false)
                onDislikeItem(sneaker)
              }}
            />
          ) : (
            <button
              className={style.unlikedButton}
              onClick={() => {
                setFavourite(true)
                onLikeItem(sneaker)
              }}
            >
              <img src="/images/heart.png" alt="Like" width={14} height={12} />
            </button>
          )}

          <img width={133} height={112} alt="Sneaker" src={sneaker.image} />
          <h5>Men's Sneakers {sneaker.title}</h5>
          <div className={style.cardBottom}>
            <div className={style.cardInfo}>
              <span>PRICE:</span>
              <p>{sneaker.price}$</p>
            </div>
            {selected ? (
              <img
                className={style.successBtn}
                src="/images/successBtn.svg"
                alt="seccessBtn"
                width={32}
                height={32}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelected(false)
                  onRemoveCartItem(sneaker)
                }}
              />
            ) : (
              <button
                className={style.plusBtn}
                onClick={() => {
                  setSelected(true)
                  onAddCartItem(sneaker)
                }}
              >
                <img src="/images/plus.svg" alt="Plus" width={10} height={10} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

Card.propTypes = {
  sneaker: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    liked: PropTypes.bool,
    selected: PropTypes.bool,
    price: PropTypes.number,
  }),
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
  favouriteSneaks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      liked: PropTypes.bool,
      selected: PropTypes.bool,
      price: PropTypes.number,
    })
  ),
  onAddCartItem: PropTypes.func,
  onRemoveCartItem: PropTypes.func,
  onLikeItem: PropTypes.func,
  onDislikeItem: PropTypes.func,
  isLoading: PropTypes.bool,
}
export default Card
