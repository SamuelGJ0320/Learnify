'use client'

import React from 'react'
import { Input } from "@/components/ui/Input"
import { Search as SearchIcon } from '@geist-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


function Search({ children, className, ...props }) {

  const router = useRouter()

  const [search, setSearch] = useState('')
  
  const handleSearch = (e) => {
    e.preventDefault()
    router.replace('courses' + (search ? `?search=${search}` : ''))
  }

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <Input
        type="search"
        className={` focus-visible:ring-0 transition-all duration-300 ${className}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}

        {...props}
      />
      <SearchIcon type='submit' className="absolute right-4" />
    </form>
  );
}

export default Search