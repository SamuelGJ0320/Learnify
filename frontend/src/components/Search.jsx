import React from 'react'
import { Input } from "@/components/ui/Input"


function Search({ children, className, ...props }) {
  return <Input type="search" className={` focus-visible:ring-0 transition-all duration-300 ${className}`} {...props}/>;
}

export default Search