import React from 'react'
import {Search} from "lucide-react";
import Form from "next/form";
import SearchResetForm from "./SearchFormReset"

const SearchForm = ({query}: {query ?: string}) => {
  
  return (
    <Form action="/" scroll={false} className='search_form' >
        <input type="text" 
         name='query'
         defaultValue={query}
         placeholder="Search for startups..." 
         className='search_input' />
        
        <div className='flex gap-2' >
            {
              query && (
                <SearchResetForm />
              )
            }
            <button title='search' type='submit' className='search_btn text-white'>
                <Search className="size-5"/>
            </button>
        </div>
    </Form>
  )
}

export default SearchForm