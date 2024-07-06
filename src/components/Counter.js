import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../context/UserDetailContext'

export default function Counter() {
    const MyName = useContext(UserContext)

    console.log(MyName)

  return (
    <div>
        Hello World
       
    </div>
  )
}
