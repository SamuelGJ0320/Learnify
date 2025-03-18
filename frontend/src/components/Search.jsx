import React from 'react'
import { Input } from "@/components/ui/Input"
import { Search as SearchIcon } from '@geist-ui/icons';


function Search({ children, className, ...props }) {
  return (
    <div className='relative flex items-center'>
      <Input
        type="search"
        className={` focus-visible:ring-0 transition-all duration-300 ${className}`}
        {...props}
      />
      <SearchIcon className='absolute right-4' />

    </div>
  );
}

export default Search