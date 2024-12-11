import { useRouter } from "next/navigation"
import Image from "next/image";

import errorImg from "../../assets/image/error.png"

const ErrorPage = () => {
    const router = useRouter();
  return (
    <div>
        <div >
          <h1></h1>
          <button></button>
        </div>
        <Image src={errorImg} alt="Error"/>
    </div>
  )
}

export default ErrorPage