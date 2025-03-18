import React from 'react'

function page({params}) {

  

    const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'test@gmail.com',
      username: 'johndoe'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'test@gmail.com',
      username: 'janedoe'
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'test@gmail.com',
      username: 'johnsmith'
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'test@gmail.com',
      username: 'janesmith'
    },
    ]



    const user = users.find(user => user.id === parseInt(params.userId))

  return (
    <div>
        <h1>{user.name}</h1>
        <p>
            {user.email}
        </p>
    </div>
  )
}

export default page