import Image from "next/image";
import Link from "next/link";
import img from "../../assets/image/man-pic.png";
import callImg from "../../assets/image/call.png";

const TorinoDetail = () => {
	return (
		<div className="flex items-center flex-col xl:flex-row mx-auto xl:mx-[126px] w-4/5  sm:w-2/3 xl:w-[1188px] h-fit xl:h-[251px] mb-16 border border-[#00000025] rounded-[10px]">
			<div className="xl:w-[870px] relative w-full h-[100px] sm:h-full bg-primery rounded-[10px] flex items-center justify-between px-2 sm:px-12">
				<div className="h-full flex flex-col justify-center">
					<h1 className="font-extrabold xl:leading-[74px] text-[20px] sm:text-3xl xl:text-[48px] text-white">
						خرید تلفنی از <span className="text-[#10411B]">تورینو</span>
					</h1>
					<h2 className="font-normal text-[16px] sm:text-xl xl:text-[32px] text-white">
						به هرکجا که میخواهید!
					</h2>
				</div>
				<Image className="absolute md:block md:bottom-0 left-0 w-[180px] md:w-[300px]" src={img} alt="man picture" />
			</div>
			<div className="flex w-full p-5 justify-between  xl:p-0 xl:flex-col h-full xl:w-[318px] gap-1 items-center xl:justify-center">
				<p className="flex items-center text-base sm:text-[28px] font-bold gap-2">
					021-1840{" "}
					<Image alt="call icon" className="w-[24px] h-[24px]" src={callImg} />
				</p>
				<Link
					href={"/about"}
					className="sm:w-[175px] w-[160px] h-[41px] text-center leading-[41px] bg-[#10411B] rounded-[9px] text-white font-medium text-base"
				>
					اطلاعات بیشتر
				</Link>
			</div>
		</div>
	);
};

export default TorinoDetail;
