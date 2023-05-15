

function ProductInfo(props) {

    const increase = () => {
        props.setQuantity(props.quantity + 1)
    }

    const decrease = () => {
        props.quantity > 0 ? props.setQuantity(props.quantity - 1) : props.setQuantity(0)
    }

    return <section className="product-info-section">
        <section className="clothes-information">
            <img src="/images/reebok.png" alt="brand logo" />
            <p className="description-p">Reebok black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p className="gender-p">Men</p>
            <div className="rate-div">
                <span className="icon-span">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </span>
                <span>4.9 of 5</span>
                <span className="rates-number">22 Rates</span>
            </div>
            <div className="cost-div">
                <span className="discount-cost">9,999 <span>LE</span></span>
                <span className="actual-cost">9,999 LE</span>
                <span>30% Off</span>
            </div>
        </section>
        <hr />

        <section className="clothes-size">
            <p>Size</p>
            <div>
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
                <span>X Large</span>
                <span>XX Large</span>
            </div>
        </section>
        <hr />

        <section className="clothes-color">
            <p>Color</p>
            <img src="../src/images/dynamicImage1.PNG" alt="clothes color" />
            <img src="../src/images/dynamicImage5.PNG" alt="clothes color" />
        </section>
        <hr />

        <section className="clothes-purchase">
            <p>Quantity</p>
            <div>
                <button onClick={decrease}>-</button>
                <span>{props.quantity}</span>
                <button onClick={increase}>+</button>
            </div>
            <div>
                <button onClick={props.addToCartClick}>Add To Cart</button>
                <button>Pickup From Store</button>
            </div>
        </section>
    </section>
}

export default ProductInfo