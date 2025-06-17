import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import StartupForm from '@/components/StartupForm';
import React from 'react'

const page = async() => {

    const session = await auth();
    if(!session) {
        redirect('/');
    }

    console.log('reached in startup creation page ');

  return (
    <>
        <section className='pink_container !min-h-[230px]' >
            <h1 className='heading'>
                Pitch Your Startup
            </h1>
            <p className='sub-heading'>
                Fill out the form below to pitch your startup idea and connect with other entrepreneurs.
            </p>
        </section>
       <StartupForm />
    </>
  )
}

export default page