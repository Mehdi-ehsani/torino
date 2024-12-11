import Image from "next/image";
import Link from "next/link";
import img from "../../assets/image/man-pic.png";
import callImg from "../../assets/image/call.png";

const TorinoDetail = () => {
	return (
		<div className="flex mx-[126px] w-[1188px] h-[251px] mb-16 border border-[#00000025] rounded-[10px]">
			<div className="w-[870px] h-full bg-primery rounded-[10px] flex items-end justify-between px-12">
				<div className="h-full flex flex-col justify-center">
					<h1 className="font-extrabold leading-[74px] text-[48px] text-white">
						خرید تلفنی از <span className="text-[#10411B]">تورینو</span>
					</h1>
					<h2 className="font-normal text-[32px] text-white">
						به هرکجا که میخواهید!
					</h2>
				</div>
				<Image src={img} alt="man picture" />
			</div>
			<div className="flex flex-col h-full w-[318px] items-center justify-center">
				<p className="flex items-center text-[28px] font-bold gap-2">
					021-1840{" "}
					<Image alt="call icon" className="w-[24px] h-[24px]" src={callImg} />
				</p>
				<Link
					href={"/about"}
					className="w-[175px] h-[41px] text-center leading-[41px] bg-[#10411B] rounded-[9px] text-white font-medium text-base"
				>
					اطلاعات بیشتر
				</Link>
			</div>
		</div>
	);
};

export default TorinoDetail;
