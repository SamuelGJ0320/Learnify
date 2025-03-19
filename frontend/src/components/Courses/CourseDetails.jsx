import React from 'react'
import TagList from '@/components/TagList';

function CourseDetails({course}) {

    const {level, estimate, instructor} = course;
    const {username} = instructor;

    const courseDetails = [level, estimate, username];


  return (
    <TagList tags={courseDetails}/>
  );
}

export default CourseDetails