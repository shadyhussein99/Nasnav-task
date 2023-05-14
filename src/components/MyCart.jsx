import ReactDOM from 'react-dom';

function MyCart(props) {

    const onClose = () => {
        props.showingCart(false)
    }

    const removeClick = () => {
        props.setCartNumber(0)
    }

    return ReactDOM.createPortal(
        props.cartNumber ? <main>
            <button onClick={onClose}>Close</button>
            <section>
                <h1>My Cart</h1>
                <p>Cart Summary</p>
                <section>
                    <div>
                        <img src="../images/dynamicImage1.PNG" alt="product image" />
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
                <p>Total: {`9,999 * ${props.cartNumber}`} LE</p>
                <div>
                    <button>Review Cart</button>
                    <button>Complete Checkout</button>
                </div>
            </section>
        </main> :
            <main>
                <button onClick={onClose}>Close</button>
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