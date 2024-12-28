import Link from "next/link";
import Image from "next/image";

import profileImg from "../../assets/image/profile3.png";
import sunImg from "../../assets/image/sun-fog.png";
import cardImg from "../../assets/image/convert-card.png";

const layout = ({ children }) => {
	return (
		<div className="2xl:px-[126px] gap-2 px-[31px] my-10 grid grid-cols-1 sm:grid-cols-4 h-full">
			<div className="2xl:w-[274px] w-full  col-span-1 h-fit sm:h-[170px] sm:border border-b border-[#00000020] sm:rounded-[10px] justify-between py-4 sm:py-0 flex sm:flex-col px-4">
				<Link
					className="flex items-center gap-2 h-full sm:border-b border-[#00000020]"
					href="/dashboard/profile"
				>
					<Image src={profileImg} alt="icon" />
					<p className="sm:text-base text-[14px] font-normal text-[#282828]">پروفایل</p>
				</Link>
				<Link
					className="flex items-center gap-2 h-full sm:border-b border-[#00000020]"
					href="/dashboard/my-tours"
				>
					<Image src={sunImg} alt="icon" />
					<p className="sm:text-base text-[14px] font-normal text-[#282828]">تور های من</p>
				</Link>
				<Link
					className="flex items-center gap-2 h-full"
					href="/dashboard/transactions"
				>
					<Image src={cardImg} alt="icon" />
					<p className="sm:text-base text-[14px] font-normal text-[#282828]"> تراکنش ها</p>
				</Link>
			</div>
			<main className=" col-span-1 sm:col-span-3 h-fit  flex flex-col gap-4 border border-[#00000020] rounded-[10px] overflow-hidden">
				{children}
			</main>
		</div>
	);
};

export default layout;
