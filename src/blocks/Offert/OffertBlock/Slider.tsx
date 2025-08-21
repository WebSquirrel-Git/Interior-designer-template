'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { getMediaUrl } from '@/utilities/getMediaUrl';

export const SliderComponent:React.FC<{images:{
    url:string;
    updatedAt:string;
    alt:string;
    width:number;
    height:number;
  }[]}>=({images})=>{
     const imagesToUrl = images.map(image=>{
    return getMediaUrl(image.url, image.updatedAt)
    
    })
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
            {imagesToUrl.map((image,i)=><Image src={image} width={300} height={600} key={i} alt='image' className='2xl:h-[50vh] lg:h-[70vh] h-[60vh] 2xl:px-6 w-auto px-1 object-cover'/>)}
        </Slider>
}