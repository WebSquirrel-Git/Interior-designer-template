'use client'

import { OffertShowCaseItem } from '@/components/Offert/OffertShowCaseItem'
import OffertImg1 from 'public/assets/temporary/offert1.jpg'
import OffertImg2 from 'public/assets/temporary/offert2.jpg'
import OffertImg3 from 'public/assets/temporary/offert3.jpg'
import OffertImg4 from 'public/assets/temporary/offert4.jpg'
import OffertBgImg from 'public/assets/temporary/offert-background.jpg'

const OFFERT_ITEM_IMAGES = [OffertImg1,OffertImg2,OffertImg3,OffertImg4]
const OFFERT = [
    {
         images:[OffertImg1,OffertImg2,OffertImg3,OffertImg4],
           background:OffertBgImg,
           header:'Projekt koncepcyjny',
           description:'Idealny dla osób, które chcą poznać potencjał swojego wnętrza. Zawiera układ funkcjonalny, moodboardy, paletę kolorów i propozycje materiałów.',
           button:{
            label:'Dowiedz się więcej',
            url:'/'
           }
    }
]


export const OffertHomePageBlock=()=>{



    return <div className='lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-start justify-start'> 
    <h2 className='py-[15px] text-accentDark'>Oferta usług</h2>
    <OffertShowCaseItem {...OFFERT[0]}/>
    <OffertShowCaseItem {...OFFERT[0]}/>
    </div>
}