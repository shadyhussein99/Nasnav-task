import { useState } from "react";
import SimilarProductsCard from "./SimilarProductsCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';

function SimilarProductsSection() {

    const [similarProductsImages, setSimilarProductImages] = useState(["staticImage1", "staticImage2", "staticImage3", "staticImage4", "staticImage5", "staticImage6"])

    return <section className="similar-products-section">
        <h2>Similar Products</h2>
        <p className="similar-products-p">You may like these products also</p>

        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                550: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1270: {
                    slidesPerView: 4,
                },
            }}
            navigation
            scrollbar={{ draggable: true }}
        >
            {similarProductsImages.map((value, index) => {
                return <SwiperSlide className="similar-products-slide" key={index}>
                    <SimilarProductsCard
                        similarProductsImg={value}
                    />
                </SwiperSlide>
            })}
        </Swiper>

    </section>
}

export default SimilarProductsSection