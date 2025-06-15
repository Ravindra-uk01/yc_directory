"use client";

import React from 'react'

const StartupForm = () => {
  return (
    <form action={()=> {}} className="startup-form"> 
        <div>
            <label htmlFor="name" className='startup-form_label' >Startup Name:</label>
            <input type="text" id="name" name="name" className='startup-form_input' required />
        </div>
        <div>
            <label htmlFor="description" className='startup-form_label' >Startup Description:</label>
            <input type="text" id="description" name="description" className='startup-form_input' required />
        </div>
        <div>
            <label htmlFor="name" className='startup-form_label' >Startup Name:</label>
            <input type="text" id="name" name="name" className='startup-form_input' required />
        </div>
        <div>
            <label htmlFor="name" className='startup-form_label' >Startup Name:</label>
            <input type="text" id="name" name="name" className='startup-form_input' required />
        </div>
    </form>
  )
}

export default StartupForm