import { useRouter } from "next/navigation"
import Image from "next/image";

import errorImg from "../../assets/image/error.png"

const ErrorPage = () => {
    const router = useRouter();
  return (
    <div className="flex items-center justify-between w-full px-[174px]">
        <div>
          <h1 className="font-semibold text-[36px] text-[#282828]">اتصال با سرور برقرار نیست!</h1>
          <h2 className="font-semibold text-[24px] text-[#282828]">لطفا بعدا دوباره امتحان کنید.</h2>
        </div>
        <Image src={errorImg} alt="Error"/>
    </div>
  )
}

export default ErrorPage