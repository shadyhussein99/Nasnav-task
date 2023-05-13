import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css/bundle';

function ProductImages() {

    const [productImages, setProductImages] = useState(["dynamicImage1, dynamicImage2, dynamicImage3, dynamicImage4, dynamicImage5, dynamicImage6, dynamicImage7, dynamicImage8"])
    const [mainImage, setMainImage] = useState("dynamicImage1")

    return <section>
        <img src={`../src/images/${mainImage}.PNG`} alt="product image" />

        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper>
    </section>
}

export default ProductImages