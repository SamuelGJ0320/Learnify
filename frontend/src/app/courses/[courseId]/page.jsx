import React from "react";
import axios from "axios";
import CourseOverview from "@/components/Courses/CourseOverview";

async function CoursePage({ params }) {
  const { courseId } = await params;

  const course = await axios.get(`http://127.0.0.1:8000/courses/${courseId}/`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching course", error);
      return [];
    });

  return (
    <div className="flex flex-col w-full items-center justify-start page-wrapper">
      <CourseOverview course={course}  />
    </div>
  );
}

export default CoursePage;
