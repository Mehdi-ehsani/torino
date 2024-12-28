"use client";
import { useProfile } from "@/core/services/queries";
import userLogo from "../../assets/image/user.png";
import arrowDown from "../../assets/image/arrow-down.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import profileImg from "../../assets/image/profile-1.png";
import userImg from "../../assets/image/profile-2.png";
import logoutImg from "../../assets/image/logout.png";
import signImg from "../../assets/image/sign-in-btn.png";
import { deleteCookie } from "@/core/utils/cookie";
import { useRouter } from "next/navigation";

const NavbarProfileBtn = () => {
	const router = useRouter();
	const { data } = useProfile();
	const [isShowMenu, setIsShowMenu] = useState(false);
	const logoutHandler = () => {
		deleteCookie("accessToken")
		deleteCookie("refreshToken")
		setIsShowMenu(false)
		router.push("/")
	}
	return (
		<div className="relative z-50">
			<Image onClick={() => setIsShowMenu((prev) => !prev)} className="w-[40px] block md:hidden cursor-pointer h-[40px]" src={signImg} alt="icon"/>
			<div
				onClick={() => setIsShowMenu((prev) => !prev)}
				className="hidden items-center gap-2 cursor-pointer md:flex"
			>
				<Image src={userLogo} alt="user logo" />
				<h1 className="text-primery text-[18px] leading-[18px] font-medium">
					{data?.data?.mobile}
				</h1>
				<Image src={arrowDown} alt="arrow" />
			</div>
			{isShowMenu && (
				<div className="absolute top-10 left-[-40px] w-[246px] h-fit rounded-[11px] bg-white shadow-md overflow-hidden">
					<div className="flex gap-2 items-center h-[44px] bg-[#f4f4f4] px-4">
						<div className="w-[28px] h-[28px] rounded-full bg-[#d9d9d9] flex items-center justify-center">
							<Image src={profileImg} alt="icon" />
						</div>
						<h1 className="text-[#10411B] text-base font-medium">
							{data?.data?.mobile}
						</h1>
					</div>
					<div className="flex flex-col justify-between px-5">
						<div className="flex gap-2 items-center h-[44px] cursor-pointer">
							<Image src={userImg} alt="icon" />
							<Link onClick={() => setIsShowMenu(false)} href="/dashboard/profile" className="text-[#282828] text-[14px] font-normal">
								اطلاعات حساب کاربری
							</Link>
						</div>
						<div className="h-[1px] bg-[#00000012]"></div>
						<div onClick={logoutHandler} className="flex gap-2 items-center h-[44px] cursor-pointer">
							<Image src={logoutImg} alt="icon" />
							<h1 className="text-[#d40000] text-[14px] font-normal">
								خروج از حساب کاربری
							</h1>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavbarProfileBtn;
