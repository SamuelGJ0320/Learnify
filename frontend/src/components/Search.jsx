'use client'

import React from 'react'
import { Input } from "@/components/ui/Input"
import { Search as SearchIcon } from '@geist-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


function Search({ children, className, ...props }) {

  const searchParams = useSearchParams();

  const router = useRouter();
  const [search, setSearch] = useState(searchParams?.get("search") || "");

  

  const handleSearch = (e) => {
    e.preventDefault();
    router.push("/courses" + (search ? `?search=${search}` : ""));
  };

  // gather the current search query
  

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <Input
        type="search"
        className={`font-semibold focus-visible:ring-0 transition-all duration-300 ${className}`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}

        {...props}
      />
      <SearchIcon onClick={handleSearch} type='submit' className="cursor-pointer absolute right-4" />
    </form>
  );
}

export default Search