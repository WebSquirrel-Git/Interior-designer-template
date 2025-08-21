'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Media } from '@/payload-types';
import { CustomImage } from '@/components/CustomImage/CustomImage';

export const SliderComponent:React.FC<{images:Media[]}>=({images})=>{
   
 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight:false,
    arrows:false,
    autoplay: true,
    speed:5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
      responsive: [
    {
      breakpoint: 1536, 
      settings: {
        slidesToShow: 1, 
      },
    },
  ],
  };
    return  <Slider {...settings}>
            {images.map((image,i)=>
            <CustomImage media={image} size='medium' key={i} className='2xl:h-[50vh] lg:h-[70vh] h-[60vh] 2xl:px-6 w-auto px-1 object-cover'/>
  
          )}
        </Slider>
}