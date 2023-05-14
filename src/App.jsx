import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductImages from "./components/ProductImages"
import ProductInfo from "./components/ProductInfo"
import SimilarProductsSection from "./components/similarProducts/SimilarProductsSection"
import MyCart from "./components/MyCart"

function App() {

  const [quantity, setQuantity] = useState(0)      // Quantity of the required product
  const [cartNumber, setCartNumber] = useState(0)  // Quantity of products in the cart 
  const [showingCart, setShowingCart] = useState(false)

  const addToCartClick = () => {
    setCartNumber(cartNumber + quantity)
  }

  return (
    <>
      <Navbar 
        cartNumber={cartNumber}
        showingCart={showingCart}
      />
      <ProductImages />
      <ProductInfo 
        quantity={quantity}
        setQuantity={setQuantity}
        addToCartClick={addToCartClick}
      />
      <SimilarProductsSection />
      {showingCart && <MyCart 
        cartNumber={cartNumber}
        setCartNumber={setCartNumber}
        showingCart={showingCart}
      />}
    </>
  )
}

export default App
