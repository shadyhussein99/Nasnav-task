

function SimilarProducts(props) {
    return <section>
        <img src={`/images/${props.similarProductsImg}.PNG`} alt="clothes pic" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <div>
            <span>9,999 <span>LE</span></span>
            <img src="/images/reebok.png" alt="brand logo" />
        </div>
        <div>
            <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span>4.2 of 5</span>
        </div>
        <p>Pickup From: Genena Mall</p>
    </section>
}

export default SimilarProducts