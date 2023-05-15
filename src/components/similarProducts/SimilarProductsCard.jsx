

function SimilarProductsCard(props) {
    return <section className="card-section">
        <div className="image-div">
            <img src={`/images/${props.similarProductsImg}.PNG`} alt="clothes pic" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <div className="cost-div">
            <span>9,999 <span className="LE">LE</span></span>
            <img src="/images/reebok.png" alt="brand logo" />
        </div>
        <div className="rate-div">
            <span className="icon-span">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </span>
            <span>4.2 of 5</span>
        </div>
        <p>Pickup From: Genena Mall</p>
    </section>
}

export default SimilarProductsCard