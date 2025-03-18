'use client'

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function CreateCoursePage() {

  const { data: session } = useSession()

  const [formState, setFormState] = useState({
  "title": "",
  "description": "",
  "instructor": "",
  "created_at": "",
  "category": "",
  "difficulty": "",
  "estimated_duration": 0,
  "price": "",
  "status": ""
  })

  const handleSubmit = async () => {
    console.log(session)
    const token = session.accessToken
    const url = "http://localhost:8000/api/courses/";
    try {
      const response = await axios.post(url, formState, {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    setFormState({
      title: "",
      description: "",
      instructor: "",
      created_at: "",
      category: "",
      difficulty: "",
      estimated_duration: 0,
      price: "",
      status: "",
    });
    console.log(response.data)
    } catch (error) {
      console.error(error)
    }

  }
    


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Create Course</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 p-2"
          value={formState.title}
          onChange={(e) => setFormState({ ...formState, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border border-gray-300 p-2"
          value={formState.description}
          onChange={(e) => setFormState({ ...formState, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructor"
          className="border border-gray-300 p-2"
          value={formState.instructor}
          onChange={(e) => setFormState({ ...formState, instructor: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="border border-gray-300 p-2"
          value={formState.category}
          onChange={(e) => setFormState({ ...formState, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Difficulty"
          className="border border-gray-300 p-2"
          value={formState.difficulty}
          onChange={(e) => setFormState({ ...formState, difficulty: e.target.value })}
        />
        <input
          type="number"
          placeholder="Estimated Duration"
          className="border border-gray-300 p-2"
          value={formState.estimated_duration}
          onChange={(e) => setFormState({ ...formState, estimated_duration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          className="border border-gray-300 p-2"
          value={formState.price}
          onChange={(e) => setFormState({ ...formState, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          className="border border-gray-300 p-2"
          value={formState.status}
          onChange={(e) => setFormState({ ...formState, status: e.target.value })}
        />
        <button onClick={handleSubmit} className="bg-blue-
        500 text-white p-2 rounded-md">Create Course</button>
      </div>
    </div>

    
  )
}

export default CreateCoursePage