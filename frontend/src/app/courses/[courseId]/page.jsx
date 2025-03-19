import React from "react";
import { courses } from "@/tests/courses";
import img from "@public/card-test.png";
import { Card, CardDescription } from "@/components/ui/Card";
import BackgroundImage from "@components/BackgroundImage";
import ReviewStars from "../../../components/Courses/ReviewStars";
import CourseDetails from "../../../components/Courses/CourseDetails";
import BackgroundBlur from "@/components/BackgroundBlur";
import { Button } from "@/components/ui/Button";
import axios from "axios";

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
      <div className="flex w-full items-stretch gap-12 max-w-7xl">
        <Card className="w-3/5 h-[450px] p-4 border-2 dark:bg-transparent">
          <div className={"relative h-full rounded overflow-clip "}>
            <BackgroundImage className={"z-0 h-auto"} image={img} />
          </div>
        </Card>
        <div className="flex flex-col  w-2/5 gap-8 justify-between">
          <div className="flex flex-col gap-4 justify-start ">
            <h1 className="text-2xl">{course?.title}</h1>
            <div className="flex gap-2">
              <ReviewStars review={course.rating_avg} />
              <span>{course.rating_avg}</span>
            </div>
            <CourseDetails course={course} />
          </div>
          <CardDescription>{course.description}</CardDescription>
          <Button className={"w-fit"}>{course.price} USD</Button>
          <div className="flex relative">
            <BackgroundBlur size={"md"} className={"w-full"}>
              <Button
                className={
                  "w-full dark:bg-linear-to-b from-white  to-neutral-300 text-neutral-800 hover:text-neutral-800 hover:to-white  border-none   transition-colors duration-300 cursor-pointer"
                }
              >
                Add to cart
              </Button>
            </BackgroundBlur>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
