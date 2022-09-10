import React from "react"
import Card from "./Card/Card"
import style from "./SneakersList.module.scss"
import PropTypes from "prop-types"

const SneakersList = ({
  sneakers,
  onAddCartItem,
  onRemoveCartItem,
  filter = "",
  onLikeItem,
  onDislikeItem,
  cartItems,
  favouriteSneaks,
  isLoading,
}) => {
  return (
    <div className={style.sneakers}>
      {isLoading ? (
        <>
          {[...Array(6)].map((_, index) => (
            <Card key={index} isLoading={isLoading} />
          ))}
        </>
      ) : (
        <>
          {[...sneakers]
            .filter((el) =>
              el.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((sneaker, index) => (
              <Card
                sneaker={sneaker}
                key={sneaker.title}
                onAddCartItem={onAddCartItem}
                onRemoveCartItem={onRemoveCartItem}
                onLikeItem={onLikeItem}
                onDislikeItem={onDislikeItem}
                cartItems={cartItems}
                favouriteSneaks={favouriteSneaks}
                isLoading={isLoading}
              />
            ))}
        </>
      )}
    </div>
  )
}

SneakersList.propTypes = {
  sneakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      liked: PropTypes.bool,
      selected: PropTypes.bool,
      price: PropTypes.number,
    })
  ),
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
  filter: PropTypes.string,
  onLikeItem: PropTypes.func,
  onDislikeItem: PropTypes.func,
  isLoading: PropTypes.bool,
}
export default SneakersList
