import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserDetailContext({children}) {
    const [Name, setName] = useState("default")
  return (
    <UserContext.Provider value = {Name}>
        {children}
    </UserContext.Provider>
  )
}
