import ReactDOM from 'react-dom';

function MyCart(props) {

    const onClose = () => {
        props.setShowingCart(false)
    }

    const removeClick = () => {
        props.setCartNumber(0)
    }

    return ReactDOM.createPortal(
        props.cartNumber ? <main>
            <i onClick={onClose} className="fa-solid fa-x"></i>
            <section>
                <h1>My Cart</h1>
                <p>Cart Summary</p>
                <section>
                    <div>
                        <img src="../src/images/dynamicImage1.PNG" alt="product image" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p>Quantity: {props.cartNumber}</p>
                        <div>
                            <span>9,999 <span>LE</span></span>
                            <button onClick={removeClick}>Remove</button>
                        </div>
                    </div>
                </section>
                <p>Total: {props.cartNumber * 9999} LE</p>
                <div>
                    <button>Review Cart</button>
                    <button>Complete Checkout</button>
                </div>
            </section>
        </main> :
            <main>
                <i onClick={onClose} className="fa-solid fa-x"></i>
                <section>
                    <h1>My Cart</h1>
                    <p>Cart Summary</p>
                    <p>You have no items yet..</p>
                </section>
            </main>,
        document.getElementById('root')
    )
}

export default MyCart