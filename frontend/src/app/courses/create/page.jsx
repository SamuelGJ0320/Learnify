'use client'

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { Select,  SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/Select'
import img from "@public/card-test.png";
import { Card } from '@/components/ui/Card'
import BackgroundImage from '@/components/BackgroundImage'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

function CreateCoursePage() {

  const { data: session } = useSession()

  const initialFormState = {
    "title": "",
    "description": "",
    "instructor": "",
    "created_at": "",
    "category": "",
    "difficulty": "",
    "estimated_duration": "",
    "price": "",
    "status": ""
  }

  const [formState, setFormState] = useState({initialFormState})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = session.accessToken
    const url = "http://localhost:8000/courses/";
    try {
      const response = await axios.post(url, formState, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    setFormState(initialFormState);

    } catch (error) {
      console.error(error)
    }

  }
    


  return (
    <form onSubmit={handleSubmit} className="flex flex-col   page-wrapper">
      <div className="flex justify-center gap-8 w-full  ">
         <Card className="w-1/2 h-[450px] p-4 border-2 dark:bg-transparent">
                  <div className={"relative h-full rounded overflow-clip "}>
                    <BackgroundImage className={"z-0 h-auto"} image={img} />
                  </div>
                </Card>
        <div className="flex flex-col w-1/3 justify-start p-4 gap-6">
          <Label className="text-2xl w-full-semibold" htmlFor="title">
            Course Title
          </Label>
          <Input
            id="title"
            type="text"
            className={"w-2/3 dark:bg-zinc-950 rounded-sm"}
            placeholder="Enter course title"
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
          />
          <Label
            className="w-full flex flex-col items-start gap-2"
            htmlFor="difficulty"
          >
            Course Difficulty
            <Select
              className="overflow-clip w-full dark:bg-zinc-950 rounded-sm"
              onChange={(e) =>
                setFormState({ ...formState, difficulty: e.target.value })
              }
            >
              <SelectTrigger className={"w-2/3"}>
                <SelectValue placeholder="Select a verified email to display" />
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
            className="w-full flex flex-col items-start gap-2"
            htmlFor="duration"
          >
            Estimated Duration
            <Input
              id="duration"
              type="number"
              className={"w-2/3 dark:bg-zinc-950 rounded-sm"}
              placeholder="Enter course duration"
              value={formState.estimated_duration}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  estimated_duration: Math.max(e.target.value, 0),
                })
              }
            />
          </Label>
          <Label
            className="w-full flex flex-col items-start gap-2"
            htmlFor="price"
          >
            Course Price
            <Input
              id="price"
              type="number"
              className={"w-2/3 dark:bg-zinc-950 rounded-sm"}
              placeholder="Enter course price"
              value={formState.price}
              onChange={(e) =>
                setFormState({ ...formState, price: e.target.value })
              }
            />
          </Label>
          <Label
            className="w-full flex flex-col items-start gap-2"
            htmlFor="category"
          >
            Course Category
            <Select
              className="dark:bg-zinc-950 rounded-sm"
              onChange={(e) =>
                setFormState({ ...formState, category: e.target.value })
              }
            >
              <SelectTrigger className={"w-2/3"}>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </Label>
        </div>
      </div>
    </form>
  );
}

export default CreateCoursePage