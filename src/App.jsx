import { useState } from "react"
import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import ProductImages from "./components/ProductImages"
import ProductInfo from "./components/ProductInfo"
import SimilarProductsSection from "./components/similarProducts/SimilarProductsSection"
import MyCart from "./components/MyCart"

const LazyComponent = lazy(() => import("./components/MyCart"))

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
        setShowingCart={setShowingCart}
      />

      <section className="row product-section">      {/* Using Bootstrap Grid System */}
        <section className="col-lg-6">
          <ProductImages />
        </section>
        <section className="col-lg-6">
          <ProductInfo
            quantity={quantity}
            setQuantity={setQuantity}
            addToCartClick={addToCartClick}
          />
        </section>
      </section>

      <SimilarProductsSection />

      <Suspense fallback={<div>Loading...</div>}>  {/* Lazy Component */}
        {showingCart &&
          <LazyComponent
            cartNumber={cartNumber}
            setCartNumber={setCartNumber}
            setShowingCart={setShowingCart}
          />
        }
      </Suspense>
    </>
  )
}

export default App
