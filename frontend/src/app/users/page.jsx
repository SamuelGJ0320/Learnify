
import React from 'react'
import Link from 'next/link'

function users() {

    

  const users = [   
    {
      id: 1,
      name: 'John Doe',
      email: 'test@raccsito.com'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'test@raccsito.com'
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'test@raccsito.com'
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'test@raccsito.com'
    },

    ]

  return (
    <div>
      {users.map((user, index) => {
        return (
          <Link key={index} href={`/users/${user.id}`}>
            <h1> {user.name}</h1>
            <p>{user.email}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default users