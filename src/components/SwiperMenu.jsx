"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperMenu() {
    return (
        <Swiper
            spaceBetween={30}
            effect='fade'
            fadeEffect={{crossFade: true}}
            speed={8000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            noSwiping={true}
            allowTouchMove={false}
            simulateTouch={false}
            modules={[EffectFade, Autoplay]}
            className="swiper w-full h-50v md:h-90v"
        >
            <SwiperSlide>
                <Image width={0} height={0} sizes="100vw" alt='Cube Charcoal' className="object-cover w-full h-full" src='/bg_1.png' />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={0} height={0} sizes="100vw" alt='Pillow Charcoal' className="object-cover w-full h-full" src="/bg_2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={0} height={0} sizes="100vw" alt='Hexagon Charcoal' className="object-cover w-full h-full" src="/bg_3.png" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperMenu;