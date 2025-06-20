import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

const UserProfile = async({params}:{params: Promise<{id: string}>}) => {

    const {id} = await params;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id});
    if (!user) return notFound();

    console.log('user is ', user)
    
   return (
    <> 
        <section className='profile_container' >
            <div className="profile_card" >
                <div className="profile_title" >
                    <h3> {user.name} </h3>
                </div>
            </div>
            <Image
                src={user.image}
                alt={user.name}
                width={100}
                height={100}
                className="profile_image" />

            <p>@{user.username}</p>
            <p>{user.description}</p>
        </section>
     </>
  )
}

export default UserProfile;