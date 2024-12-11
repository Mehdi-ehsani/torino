import { useRouter } from "next/navigation"
import Image from "next/image";

import notFoundImg from "../../assets/image/notFound.png"

const NotFoundPage = () => {
  const router = useRouter()  
  return (
    <div className="flex items-center justify-between w-full px-[174px]">
        <div>
            <h1 className="font-semibold text-[36px] text-[#282828]">صفحه مورد نظر یافت نشد!</h1>
            <button className="bg-[#D8FFE1] w-[361px] h-[75px] rounded-2xl text-3xl font-semibold text-primery mt-12" >بازگشت به صفحه اصلی</button>
        </div>
        <Image src={notFoundImg} alt="not found url" />
    </div>
  )
}

export default NotFoundPage