import React from "react"
import style from "./Orders.module.scss"
import PropTypes from "prop-types"
import OrderCard from "./OrderCard"
import { Link } from "react-router-dom"

const Orders = ({ items }) => {
  return (
    <div className={style.content}>
      {items.length === 0 ? (
        <div className={style.noOrders}>
          <img src="/images/noOrders.png" alt="noFav" width={70} height={70} />
          <h2>You have no orders</h2>
          <p>Are you a rogue? Place at least one order.</p>
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
            <h1>My Orders</h1>
          </div>
          <div className={style.sneakers}>
            {items.map((sneaker) => (
              <OrderCard sneaker={sneaker} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

Orders.propTypes = {
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
export default Orders
