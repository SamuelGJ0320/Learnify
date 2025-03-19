import React from 'react'
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";



function ReviewStars({review, className}) {
  return (
   <div className={`flex items-center ${className}`}>
        {
          Array.from({length: 5}, (_, index) => {
            const starValue = index + 1;
            if (review >= starValue) {
              return <MdOutlineStarPurple500 key={index} className="text-white" />
            } else if (review >= starValue - 0.5) {
              return <MdOutlineStarHalf key={index} className="text-white" />
            } else {
              return <MdOutlineStarOutline key={index} className="text-white" />
            }
          })
        }
   </div>
  )
}

export default ReviewStars