"use client"
import { useProfile } from '@/services/queries'
import React from 'react'

const NavbarProfileBtn = () => {
  const {data} = useProfile();
  console.log(data)
  return (
    <h1>{data.data.mobile}</h1>
  )
}

export default NavbarProfileBtn