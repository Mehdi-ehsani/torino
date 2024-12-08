'use client'
import Image from "next/image";

import TorinoLogo from "../../assets/torino.png";


const FooterContactLogo = () => {
  return (
    <div className="flex flex-col gap-4 items-end">
    <Image src={TorinoLogo} alt="torino logo" />
    <p>تلفن پشتیبانی: 8735-021</p>
</div>
  )
}

export default FooterContactLogo