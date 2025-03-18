import Background from "@/components/BackgroundImage";
import bg from "@public/home-background.svg";
import React from "react";
import { courses } from "@/tests/courses";
import CourseCard from "./components/CourseCard";
import Link from "next/link";

function Courses() {
  return (
    <div className="flex flex-col w-full items-center justify-center page-wrapper">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default Courses;
