"use client"
import Link from "next/link"

const FooterLink = ({href , text}) => {
  return (
    <Link className="text-lg text-[#282828] font-normal hover:text-primery transition-colors" href={href}>{text}</Link>
  )
}

export default FooterLink