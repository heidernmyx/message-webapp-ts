import React from 'react'
import { cookies } from 'next/headers'

const Name = () => {

  const cookieStored = cookies();
  const usersessionName = cookieStored.get('email');
  console.log(usersessionName)
  return (
    <p className="ml-[0.6vw] text-[14px] font-[550]">{usersessionName?.value}</p>
  )
}

export default Name