import Image from "next/image"
import HeaderImg from "../../assets/image/header.png"

const Header = () => {
  return (
    <Image src={HeaderImg} alt="header pic" />
  )
}

export default Header