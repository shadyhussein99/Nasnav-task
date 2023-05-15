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
            <div className="icon-div">
                <i onClick={onClose} className="fa-solid fa-x"></i>
            </div>
            <section className='cart-section'>
                <h1>My Cart</h1>
                <p className='cart-summary-p'>Cart Summary</p>
                <section className='row cart-info'>
                    <div className='col-4 image-div'>
                        <img className=' cart-info-image' src="../src/images/dynamicImage1.PNG" alt="product image" />
                    </div>
                    <div className='col-8 cart-info-div'>
                        <p className='cart-info-description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className='cart-info-quantity'>Quantity: {props.cartNumber}</p>
                        <div>
                            <span>9,999 <span className='LE'>LE</span></span>
                            <button onClick={removeClick}>Remove</button>
                        </div>
                    </div>
                </section>
                <p className='total-money'>Total: {props.cartNumber * 9999} LE</p>
                <div className='buttons-div'>
                    <button className='review-button'>Review Cart</button>
                    <button className='checkout-button'>Complete Checkout</button>
                </div>
            </section>
        </main> :
            <main>
                <div className="icon-div">
                    <i onClick={onClose} className="fa-solid fa-x"></i>
                </div>
                <section className='cart-section'>
                    <h1>My Cart</h1>
                    <p className='cart-summary-p'>Cart Summary</p>
                    <p className='no-items-p'>You have no items yet..</p>
                </section>
            </main>,
        document.getElementById('root')
    )
}

export default MyCart