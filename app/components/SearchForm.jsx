import React from 'react'
import {Search} from "lucide-react";
import Form from "next/form";

const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className='search_form' >
        <input type="text" 
         placeholder="Search for startups..." 
         className='search_input' />
        
        <div>
            <button className='search_btn text-white'>
                <Search size={20} />
            </button>
        </div>
    </Form>
  )
}

export default SearchForm