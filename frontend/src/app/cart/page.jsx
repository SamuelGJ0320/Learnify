// filepath: c:\Users\valer\Desktop\Learnify\frontend\src\app\cart\page.jsx
import React from 'react';
import OrderSummary from './components/OrderSummary';
import ReviewCard from '@/components/Courses/ReviewCard';
import Thumbnail from '@/components/Courses/Thumbnail';
import CourseCard from '@/components/Courses/CourseCard';
import CreateNewCourse from '@/components/Courses/CreateNewCourse';

const CartPage = () => {
  return (
    <div>
        <OrderSummary />
        <CreateNewCourse />


    </div>
  );
};

export default CartPage;
