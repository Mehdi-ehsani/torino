'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";

import notFoundImg from "../assets/image/notFound.png";

const NotFound = () => {
	const router = useRouter();
    const pushToHomePage = ( ) => [
        router.push("/")
    ]
	return (
		<div className="flex  flex-col-reverse items-center md:flex-row justify-between w-full px-[31px] md:px-[174px]">
			<div className="flex flex-col items-center">
				<h1 className="font-semibold text-[24px] md:text-[36px] text-[#282828]">
					صفحه مورد نظر یافت نشد!
				</h1>
				<button onClick={pushToHomePage} className="bg-[#D8FFE1] md:w-[361px] w-[232px] h-[58px] rounded-2xl text-[20px] md:text-3xl font-semibold text-primery mt-5 md:mt-12">
					بازگشت به صفحه اصلی
				</button>
			</div>
			<Image   src={notFoundImg} alt="not found url" />
		</div>
	);
};

export default NotFound;
