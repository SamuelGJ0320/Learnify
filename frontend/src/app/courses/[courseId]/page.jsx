import React from "react";
import { courses } from "@/lib/test";
import img from "@public/card-test.png";
import { Card, CardDescription } from "@/components/ui/Card";
import BackgroundImage from "@components/BackgroundImage";
import ReviewStars from "../components/ReviewStars";
import CourseDetails from "../components/CourseDetails";
import BackgroundBlur from "@/components/BackgroundBlur";
import { Button } from "@/components/ui/Button";



async function CoursePage({ params }) {
  const { courseId } = await params;

  const course = courses.find((course) => course.id === parseInt(courseId));

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
            <h1 className="text-2xl">Curso de python y ciencia de datos</h1>
            <ReviewStars review={2.7} />
            <CourseDetails course={course} />
          </div>
          <CardDescription>{course.description}</CardDescription>
          <Button className={"w-fit"}>{course.price.toFixed(2)} USD</Button>
          <div className="flex relative">
            <BackgroundBlur
              size={"lg"}
              className={"w-full"}
              color={"bg-linear-to-b from-cart-start to-cart-end"}
            >
              <Button
                className={
                  "w-full dark:bg-black hover:dark:bg-black cursor-pointer"
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
