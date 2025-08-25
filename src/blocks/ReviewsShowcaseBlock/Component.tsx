'use client'

import { SliderComponent } from './Slider'


interface ReviewsShowCaseProps{
     reviews:{ name:string,
    realizationName:string,
    stars:number,
    description:string}[]
}
export const ReviewsShowcaseBlock=({reviews}:ReviewsShowCaseProps)=>{
    return <div id='opinie' className='lg:px-28 sm:px-12  py-[50px] flex flex-col items-start justify-start'>
       <h2 className='py-[15px] sm:px-0 px-4 text-accentDark'>Opinie</h2>
        <div className='block ml-auto w-[100%] md:py-[38px] py-4'>
<SliderComponent rewievs={reviews}/>
</div>
       </div>
}