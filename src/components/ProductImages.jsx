import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper';
import 'swiper/css/bundle';

function ProductImages() {

    const [productImages, setProductImages] = useState(["dynamicImage1", "dynamicImage2", "dynamicImage3", "dynamicImage4", "dynamicImage5", "dynamicImage6", "dynamicImage7", "dynamicImage8"])
    let [mainImage, setMainImage] = useState(productImages[0])

    const handleClick = (slideIndex) => {
        setMainImage(productImages[slideIndex])

    }

    return <section>
        <img src={`../src/images/${mainImage}.PNG`} alt="product image" />

        <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={40}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 2000,
            }}
        >
            {productImages.map((value, index) => {
                return <SwiperSlide key={index} onClick={() => handleClick(index)}>
                    <img src={`../src/images/${value}.PNG`} alt="product image" />
                </SwiperSlide>
            })}
        </Swiper>
    </section>
}

export default ProductImages