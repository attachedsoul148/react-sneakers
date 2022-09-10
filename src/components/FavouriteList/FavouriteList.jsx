import React from "react"
import style from "./FavouriteList.module.scss"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import FavCard from "./FavCard"

const FavouriteList = ({ items, onDislikeItem }) => {
  return (
    <div className={style.content}>
      {items.length === 0 ? (
        <div className={style.noFav}>
          <img src="/images/noFav.png" alt="noFav" width={70} height={70} />
          <h2>No favourites</h2>
          <p>You didn't add favourite sneakers</p>
          <Link to="/">
            <button>
              <img
                width={14}
                height={12}
                src="/images/backArrow.png"
                alt="Arrow"
              />
              Go back
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className={style.contentHeader}>
            <h1>Favourite Sneakers</h1>
          </div>
          <div className={style.sneakers}>
            {items.map((sneaker) => (
              <FavCard onDislikeItem={onDislikeItem} sneaker={sneaker} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

FavouriteList.propTypes = {
  onDislikeItem: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      liked: PropTypes.bool,
      selected: PropTypes.bool,
      price: PropTypes.number,
    })
  ),
}
export default FavouriteList
