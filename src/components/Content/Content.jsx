import React, { useState } from "react"
import SneakersList from "./SneakersList/SneakersList"
import style from "./Content.module.scss"
import PropTypes from "prop-types"

const Content = ({
  sneakers,
  onAddCartItem,
  onRemoveCartItem,
  onLikeItem,
  onDislikeItem,
  cartItems,
  favouriteSneaks,
  isLoading,
}) => {
  const [filter, setFilter] = useState("")
  return (
    <>
      <div className={style.slide}>
        <img src="/images/slide.png" alt="Slide" />
      </div>
      <div className={style.content}>
        <div className={style.contentHeader}>
          <h1>All Sneakers</h1>
          <div className={style.searchBlock}>
            <img src="/images/search.svg" alt="search" />
            <input
              placeholder="Search..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <SneakersList
          filter={filter}
          sneakers={sneakers}
          onAddCartItem={onAddCartItem}
          onRemoveCartItem={onRemoveCartItem}
          onLikeItem={onLikeItem}
          onDislikeItem={onDislikeItem}
          cartItems={cartItems}
          favouriteSneaks={favouriteSneaks}
          isLoading={isLoading}
        />
      </div>
    </>
  )
}

Content.propTypes = {
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
  onLikeItem: PropTypes.func,
  onDislikeItem: PropTypes.func,
  isLoading: PropTypes.bool,
}
export default Content
