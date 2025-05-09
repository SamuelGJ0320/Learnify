import React from "react";
import CourseCard from "@components/Courses/CourseCard";
import axios from "axios";

async function Courses({searchParams}) {

const { search } = await searchParams;

  const url = new URL("http://127.0.0.1:8000/courses/");

  if (search) {
    url.searchParams.append("search", search);
  }

  const courses = await axios.get(url.toString())
  .then((res) => {
    const data = res.data;
    const courses = data.results;

    return courses
  })
  .catch((error) => {
    console.error("Error fetching courses", error);
    return [];
  });



  return (
    <div className="flex flex-col w-full items-center justify-start page-wrapper">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default Courses;
