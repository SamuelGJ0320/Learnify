import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import img from "@public/card-test.png";
import { Button } from "@/components/ui/Button";
import BackgroundBlur from "@/components/BackgroundBlur";
import Link from "next/link";
import CourseDetails from "./CourseDetails";

function CourseCard({ course }) {
  const ratingRangeClass =
    course.rating > 4
      ? "from-rating-high-start to-rating-high-end"
      : course.rating > 3
      ? "from-rating-mid-start to-rating-mid-end"
      : "from-rating-low-start to-rating-low-end";

  return (
    <Link
      className="w-full max-w-7xl content-center "
      href={`/courses/${course.id}`}
    >
      <Card
        className={
          "flex-row justify-start gap-0  dark:bg-transparent p-0 overflow-clip border-2 bg-white h-72"
        }
      >
        <div className="relative w-2/3 h-">
          <Image
            alt="Grid"
            src={img}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-between p-6">
          <CardHeader className={"flex flex-col items-start p-0"}>
            <CardTitle className={"text-xl"}>
              <h1>{course.title}</h1>
            </CardTitle>
            <CardDescription className={"text-lg "}>
              <p className="overflow-hidden text-ellipsis">
                {course.description}
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter
            className={
              "flex flex-col justify-between p-0 lg:flex-row lg:items-end"
            }
          >
            <CourseDetails course={course} />
            <div className="flex gap-4">
              <Button size={"xl"}>{course.price} USD</Button>
              <BackgroundBlur
                color={`bg-linear-to-b  ${ratingRangeClass}`}
                size="lg"
              >
                <Button
                  className={`bg-linear-to-b  ${ratingRangeClass} text-xl`}
                  size={"xl"}
                >
                  {course.rating || 0}
                </Button>
              </BackgroundBlur>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}

export default CourseCard;
