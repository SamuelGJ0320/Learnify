"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";
import img from "@public/card-test.png";
import { Card } from "@/components/ui/Card";
import BackgroundImage from "@/components/BackgroundImage";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

function CreateCoursePage() {

  const { data: session } = useSession();
  const router = useRouter();




  const initialFormState = {
    title: "",
    description: "",
    category: "",
    difficulty: "",
    estimated_duration: "",
    price: "",
    status: "draft",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = session.accessToken;
    const url = "http://localhost:8000/courses/";
    console.log(token);
    console.log(url, formState, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    try {
      const response = await axios.post(url, formState, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      console.log(response);

      const courseData = response.data;

      setFormState(initialFormState);

      router.push(`/courses/${courseData.id}`);
      
    } catch (error) {
      console.error(error);
    }
  };

  // Modularized onChange handler
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Modularized onValueChange handler for Select
  const handleSelectChange = (id) => (value) => {
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(formState)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-5 gap-6 px-0 page-wrapper w-full "
    >
      <Card className="col-start-2 col-span-2 h-full overflow-clip p-4 border-2 dark:bg-transparent relative">
       
          <BackgroundImage className={"z-0 h-auto"} image={img} />
     
      </Card>
      <div className="flex flex-col justify-start p-4 gap-6 ">
        <Label className="text-2xl w-full" htmlFor="title">
          Course Title
        </Label>
        <Input
          id="title"
          type="text"
          className={" dark:bg-zinc-950 rounded-sm font-thin"}
          placeholder="Enter course title"
          value={formState.title}
          onChange={handleInputChange}
        />
        <Label
          className="w-full font-thin text-md flex flex-col items-start gap-2"
          htmlFor="difficulty"
        >
          Course Difficulty
          <Select
            className="overflow-clip w-full dark:bg-zinc-950 rounded-sm"
            onValueChange={handleSelectChange("difficulty")}
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </Label>
        {/* Course duration */}
        <Label
          className="w-full font-thin text-md flex flex-col items-start gap-2"
          htmlFor="duration"
        >
          Estimated Duration ( In Hours )
          {/* estimated duration cant be minor than 1 */}
          <Input
            id="estimated_duration"
            type="number"
            className={" dark:bg-zinc-950 rounded-sm"}
            placeholder="Enter course duration"
            value={Math.max(0, formState.estimated_duration) || ""}
            onChange={handleInputChange}
          />
        </Label>
        <Label
          className="w-full font-thin text-md flex flex-col items-start gap-2"
          htmlFor="price"
        >
          Course Price
          <Input
            id="price"
            type="number"
            className={" dark:bg-zinc-950 rounded-sm"}
            placeholder="Enter course price"
            value={formState.price}
            onChange={handleInputChange}
          />
        </Label>
        <Label
          className="w-full font-thin text-md flex flex-col items-start gap-2"
          htmlFor="category"
        >
          Course Category
          <Select
            className="dark:bg-zinc-950 rounded-sm"
            onValueChange={handleSelectChange("category")}
          >
            <SelectTrigger className={"w-full"}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="programming">Programming</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </Label>
      </div>

      <div className="flex flex-col w-full col-start-2 col-span-3  gap-12 ">
        <Label
          className="w-full font-thin text-md flex flex-col items-start gap-"
          htmlFor="description"
        >
          Course Description
          <Textarea
            id="description"
            type="text"
            className={"w-full dark:bg-zinc-950 rounded-sm"}
            placeholder="Enter course description"
            value={formState.description}
            onChange={handleInputChange}
          />
        </Label>
        <Button
          type="submit"
          
        >
          Create Course
        </Button>
      </div>
    </form>
  );
}

export default CreateCoursePage;
