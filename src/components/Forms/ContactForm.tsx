'use client'
import { z} from 'zod';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import SendIcon from 'public/assets/icons/send-accent.svg'

import Image from 'next/image';
import { useState } from 'react';
const schema = z.object({
  name: z.string().min(6, 'Minimalna długość wynosi 6 znaków'),
  telephone: z.string('niepoprawna wartość').min(9,'Numer telefonu powinien składać się z min 9 cyfr'),
  email:z.email('Niepoprawny email').min(4),
  location:z.string().optional(),
  surface:z.string().optional(),
  message:z.string().min(6,'Wiadomość jest za krótka')
});


type FormFields = z.infer<typeof schema>;

export const ContactForm=()=>{
     const [status, setStatus] = useState('Wyślij wiadomość');
  const {
    register,
    handleSubmit,
    setError,reset,
    formState: {errors},
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      telephone: '',
      email:'',
      location:'',
      surface:'',
      message:''
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const {name,telephone,email,location,surface,message} = data
    try {
        setStatus('Wysyłanie...')
        const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name,telephone,email,location,surface,message}),
  });

  if (!res.ok) {
    setStatus('Błąd wysyłania')
    if (res.status === 401) {
      throw new Error('Wrong login or password');
    }
    throw new Error('Server error, try again later');
  }
 setStatus('Wiadomość wysłana')
  
    setTimeout(()=>{
        setStatus('Wyślij wiadomość');
        reset();
    },3000)
  return res.json();
} catch (error) {
      console.log(error);
      setError('root', {
        message: `${String(error).replace('Error:', '')}`,
      });
    }
   
  };
    return <div className='flex flex-col gap-6 bg-black md:w-[750px] md:h-full w-full h-fit md:p-[50px] p-4 md:py-0 py-8 items-center sm:justify-center justify-start'>
              <h2 className='sm:text-[32px] text-[24px] w-full text-left text-accentDark'>Zarezerwuj spotkanie</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='w-full h-fit'>
         <div className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <input
            {...register('name')}
            type="text"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] bg-black "
            placeholder="Imię i nazwisko"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <div className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <input
            {...register('telephone')}
            type="number"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] bg-black"
            placeholder="Telefon"
          />
        </div>
        {errors.telephone && (
          <p className="text-red-500 text-sm">{errors.telephone.message}</p>
        )}
        <div className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <input
            {...register('email')}
            type="email"
            className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3"
            placeholder="Twój e-mail"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
         <div className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <input
            {...register('location')}
            type="text"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] bg-black "
            placeholder="Lokalizacja"
          />
        </div>
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
         <div className="w-full h-10 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <input
            {...register('surface')}
            type="number"
            className="w-full border-0 outline-none size-4 placeholder-[#B0B0B0] text-white bg-black "
            placeholder="Powierzchnia"
          />
        </div>
        {errors.surface && (
          <p className="text-red-500 text-sm">{errors.surface.message}</p>
        )}
         <div className="w-full h-32 flex flex-row items-center justify-center border-accentDark border-b-[1px] bg-black py-2.5 gap-3">
         
          <textarea
            {...register('message')}
            className="w-full border-0 h-full outline-none size-4 placeholder-[#B0B0B0] text-white bg-black "
            placeholder="Wiadomość"
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
         <button
          type="submit"
          className="group hover:bg-accent hover:border-white transition-all duration-500 mt-4 sm:h-[48px] h-[42px] relative flex flex-row gap-[10px] pr-[60px] border-accent border-[2px] rounded-full"
        >
              <span className='pl-4 py-[10px] text-[14px] font-semibold'>{status}</span>
                    <span className='group-hover:bg-white transition-all duration-500 absolute flex items-center justify-center right-[-3px] top-[-2px] sm:h-[48px] sm:w-[48px] h-[42px] w-[42px]  border-basic border-[2px] rounded-full'>
            <Image src={SendIcon} alt='call' width={24} height={24} className='sm:h-[24px] sm:w-[24px] h-[16px] w-[16px]'/>
                    </span>
         
        </button>
    </form>
    </div>
}