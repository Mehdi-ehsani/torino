"use client";
import Image from "next/image";

import editImg from "../../../assets/image/edit-2.png";

const PersonalInfo = ({data , setIsPersonalInfoEdit}) => {
   
	return (
		<div className="border border-[#00000020] rounded-[10px] m-4 p-4">
			<h1 className=" text-black font-semibold">اطلاعات حساب کاربری</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
				<div className="flex items-center gap-3 sm:justify-start justify-between">
					<p className="text-[14px] text-black font-normal">شماره موبایل</p>
					<h1 className="text-base text-[#282828] font-medium">
						{data.data.mobile}
					</h1>
				</div>
				<div className="flex justify-between items-center gap-3">
					<div className="flex items-center gap-5">
						<p className="text-[14px] text-black font-normal">ایمیل</p>
						{!!data.data.email ? (
							<h1 className="text-base text-[#282828] font-medium">
								{data.data.email}
							</h1>
						) : (
							<h1 className="text-base text-[#282828] font-medium">_</h1>
						)}
					</div>
					<div onClick={() => setIsPersonalInfoEdit(true)} className="flex items-center gap-1 cursor-pointer">
						<Image src={editImg} alt="icon" />
						<p className="text-[#009ECA]">افزودن</p>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default PersonalInfo;
