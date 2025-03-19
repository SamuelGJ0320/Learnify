import React from "react";
import CourseCard from "./components/CourseCard";

async function Courses({ searchParams }) {
  const { search } = await searchParams;

  const url = new URL("http://127.0.0.1:8000/courses/");

  if (search) {
    url.searchParams.append("search", search);
  }

  const data = await fetch(url);

  const courses = await data.json();

  return (
    <div className="flex flex-col w-full items-center justify-start page-wrapper">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default Courses;
