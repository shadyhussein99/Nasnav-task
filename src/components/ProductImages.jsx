import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper';
import 'swiper/css/bundle';

function ProductImages() {

    const [mainProductImages, setMainProductImages] = useState(["dynamicImage1", "dynamicImage2", "dynamicImage3", "dynamicImage4", "dynamicImage5", "dynamicImage6", "dynamicImage7", "dynamicImage8"])
    let [mainImage, setMainImage] = useState(mainProductImages[0])

    const handleClick = (slideIndex) => {
        setMainImage(mainProductImages[slideIndex])

    }

    return <section className="product-images-section">
        <div className="image-div">
            <img className="main-image" src={`../src/images/${mainImage}.PNG`} alt="product image" />
        </div>


            <Swiper
                modules={[Navigation, Autoplay, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                autoplay={{
                    delay: 2000,
                }}
            >
                {mainProductImages.map((value, index) => {
                    return <SwiperSlide className="swiper-slide" key={index} onClick={() => handleClick(index)}>
                        <img className="swiper-img" src={`../src/images/${value}.PNG`} alt="product image" />
                    </SwiperSlide>
                })}
            </Swiper>

    </section>
}

export default ProductImages