import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductImages from "./components/ProductImages"
import ProductInfo from "./components/ProductInfo"
import SimilarProductsSection from "./components/similarProducts/SimilarProductsSection"

function App() {

  const [quantity, setQuantity] = useState(0)      // Quantity of the required product
  const [cartNumber, setCartNumber] = useState(0)  // Quantity of products in the cart 

  const addToCartClick = () => {
    setCartNumber(cartNumber + quantity)
    setQuantity(0)
  }

  return (
    <>
      <Navbar 
        cartNumber={cartNumber}
      />
      <ProductImages />
      <ProductInfo 
        quantity={quantity}
        setQuantity={setQuantity}
        addToCartClick={addToCartClick}
      />
      <SimilarProductsSection />
    </>
  )
}

export default App
