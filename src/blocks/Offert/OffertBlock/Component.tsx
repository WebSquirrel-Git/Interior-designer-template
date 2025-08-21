'use client'
import { ButtonLinkText } from '@/components/ui/buttons/ButtonLinkText'
import { StaticImageData } from 'next/image'
import OffertImg1 from 'public/assets/temporary/offert1.jpg'
import OffertImg2 from 'public/assets/temporary/offert2.jpg'
import OffertImg3 from 'public/assets/temporary/offert3.jpg'
import OffertImg4 from 'public/assets/temporary/offert4.jpg'
const Offert = 
    {
        header:'Projekt koncepcyjny',
        description:['To idealne rozwiązanie dla osób, które chcą poznać potencjał swojego wnętrza i zobaczyć różne możliwości aranżacji.',
            'W ramach projektu przygotowujemy układ funkcjonalny pomieszczeń, moodboardy oraz propozycje materiałów i kolorystyki. Dzięki temu zyskujesz jasną wizję tego, jak Twoja przestrzeń może wyglądać w praktyce.',
            'To świetny wybór na początek, jeśli nie planujesz od razu pełnej realizacji, a potrzebujesz inspiracji i kierunku działań.',
            'Projekt koncepcyjny daje solidną bazę do dalszej pracy nad wnętrzem, także we własnym zakresie. Dzięki niemu unikniesz błędów przy zakupach i oszczędzisz czas na etapie urządzania.'
        ],
        button:{
            label:'Umów się na spotkanie',
            url:'/'
        },
        images:[OffertImg1,OffertImg2,OffertImg3,OffertImg4]
    }


interface OffertBlockProps{
    
    header:string,
    description:string[],
    button:{
        label:string,
        url:string
    },
    images:StaticImageData[]
}

export const OffertBlock=()=>{


    return <div className='lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-start justify-start'>
       <h2 className='py-[15px] text-accentDark'>{Offert.header}</h2>
       <div className='flex flex-row md:py-[38px] sm:px-0 p-4 pl-0'>
        <div className='flex flex-col gap-12 w-[30%]'>
            <div className='flex flex-col gap-6'>
                {Offert.description.map((paragraph,i)=><p key={i} className='py-2 border-b-[1px] border-accent'>
{paragraph}
                </p>)}
                
            </div>
            <ButtonLinkText label={Offert.button.label} url={Offert.button.url}/>
        </div>
       </div>
    </div>
}