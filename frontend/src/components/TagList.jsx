import React from 'react'
import { Button } from './ui/Button'

function TagList({ tags, size='sm' }) {
  return (
    <div className='flex'>
        {tags.map((tag, index) => (
            <Button key={index}  size={size}>
            {tag}
            </Button>
        ))}
    </div>
  )
}

export default TagList