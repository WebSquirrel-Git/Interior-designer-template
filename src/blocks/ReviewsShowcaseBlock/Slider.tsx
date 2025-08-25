'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from 'public/assets/icons/star-accent.svg'
import Image from 'next/image';


interface SliderComponentProps{
  rewievs:{ name:string,
    realizationName:string,
    stars:number,
    description:string}[]
 
}
export const SliderComponent=({rewievs}:SliderComponentProps)=>{
   
 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight:false,
    arrows:true,
    autoplay: true,
    speed:500,
    autoplaySpeed: 5000,
    cssEase: "linear",
      responsive: [
        {
      breakpoint: 1536, 
      settings: {
        slidesToShow: 2, 
      },
    },
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 1, 
      },
    },
     {
      breakpoint: 640, 
      settings: {
         slidesToShow: 1,
         arrows:false,
         dots:true
      },
    }
  ],
  };
    return  <Slider {...settings} className='sm:w-full w-[100%] mx-auto'>
      {rewievs.map((review,i)=>  <div key={i} className='px-[16px] block sm:w-[450px] w-[300px]'><div key={i} className=' flex flex-col gap-4 p-6 border-accent border-[2px] '>
            <div className='flex flex-col gap-2'>
              <h3 className='text-accent'>{review.name}</h3>
              <p>{review.realizationName}</p>
              <div className='flex flex-row gap-1'>
                {Array.from({length:review.stars},StarIcon=>StarIcon).map((star,i)=><Image key={i} src={StarIcon} alt='ocena' width={16} height={16}/>)}
              </div>
            </div>
<p>{review.description}</p>
           </div></div>)}
  
        </Slider>
}