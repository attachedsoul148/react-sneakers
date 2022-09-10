import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import CartModal from "./components/Cart/CartModal"
import EmptyCart from "./components/Cart/EmptyCart"
import Content from "./components/Content/Content"
import FavouriteList from "./components/FavouriteList/FavouriteList"
import Header from "./components/Header/Header"
import Orders from "./components/Orders/Orders"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [orders, setOrders] = useState([])
  const [sneakers, setSneakers] = useState([])
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const [favouriteSneaks, setFavouriteSneaks] = useState([])
  const onAddCartItem = async (item) => {
    try {
      if (!cartItems.some((cartEl) => cartEl.id === item.id)) {
        const res = await axios.post(
          "https://62f0f4dee2bca93cd240ccb5.mockapi.io/cart",
          item
        )
        setCartItems((prev) => [res.data, ...prev])
      }
    } catch (e) {
      alert(e.message)
    }
  }
  const onRemoveCartItem = (item) => {
    try {
      setCartItems([...cartItems].filter((el) => el.id !== item.id))
      axios.delete(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/cart/" + item.id
      )
    } catch (e) {
      alert(e.message)
    }
  }
  const onLikeItem = async (item) => {
    try {
      if (!favouriteSneaks.some((fav) => fav.title === item.title)) {
        const res = await axios.post(
          "https://62f0f4dee2bca93cd240ccb5.mockapi.io/favourite",
          item
        )
        setFavouriteSneaks((prev) => [res.data, ...prev])
      }
    } catch (e) {
      alert(e.message)
    }
  }
  const onDislikeItem = (item) => {
    try {
      setFavouriteSneaks(
        [...favouriteSneaks].filter((el) => el.title !== item.title)
      )
      axios.delete(
        `https://62f0f4dee2bca93cd240ccb5.mockapi.io/favourite/${item.id}`
      )
    } catch (e) {
      alert(e.message)
    }
  }
  const onAddOrder = async (item) => {
    try {
      const res = await axios.post(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/orders",
        item
      )
      setOrders((prev) => [res.data, ...prev])
    } catch (e) {
      alert(e.message)
    }
  }
  const fetchSneakers = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/sneakers"
      )
      const cart = await axios.get(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/cart"
      )
      const favourite = await axios.get(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/favourite"
      )
      const myOrders = await axios.get(
        "https://62f0f4dee2bca93cd240ccb5.mockapi.io/orders"
      )
      setIsLoading(false)
      setSneakers(res.data)
      setCartItems(cart.data)
      setOrders(myOrders.data)
      setFavouriteSneaks(favourite.data)
    } catch (e) {
      alert(e.message)
    }
  }
  useEffect(() => {
    fetchSneakers()
  }, [])
  const onOrder = () => {
    for (let index = 0; index < cartItems.length; index++) {
      onRemoveCartItem(cartItems[index])
      onAddOrder(cartItems[index])
    }
    setCartItems([])
    setIsOrderCompleted(true)
  }
  const closeHandler = () => {
    setIsCartOpen(false)
    setIsOrderCompleted(false)
  }
  return (
    <div className="wrapper clear">
      {isCartOpen ? (
        cartItems.length === 0 ? (
          <EmptyCart
            closeHandler={closeHandler}
            mainText={isOrderCompleted ? "Order is processed" : "Cart is empty"}
            secondaryText={
              isOrderCompleted
                ? "Your order #18 will be delivered to courier soon."
                : "Add at least one pair of sneakers to place an order."
            }
            image={isOrderCompleted ? "/images/order.jpg" : "/images/cart.png"}
            isOrderCompleted={isOrderCompleted}
          />
        ) : (
          <CartModal
            closeHandler={closeHandler}
            cartItems={cartItems}
            onRemoveCartItem={onRemoveCartItem}
            onOrder={onOrder}
          />
        )
      ) : null}
      <Header cartHandler={() => setIsCartOpen(true)} orders={orders}/>
      <Routes>
        <Route
          path="/favourite"
          element={
            <FavouriteList
              items={favouriteSneaks}
              onDislikeItem={onDislikeItem}
            />
          }
        />
        <Route path="/orders" element={<Orders items={orders} />} />
        <Route
          path="/"
          element={
            <Content
              sneakers={sneakers}
              onAddCartItem={onAddCartItem}
              onRemoveCartItem={onRemoveCartItem}
              onLikeItem={onLikeItem}
              onDislikeItem={onDislikeItem}
              cartItems={cartItems}
              favouriteSneaks={favouriteSneaks}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
