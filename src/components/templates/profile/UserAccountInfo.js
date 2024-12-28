"use client";
import Image from "next/image";

import editImg from "../../../assets/image/edit-2.png";

const UserAccountInfo = ({data , setIsUserAccountInfoEdit}) => {
	return (
		<div className="border border-[#00000020] rounded-[10px] mx-4 p-4">
			<div className="flex items-center justify-between">
				<h1 className=" text-black font-semibold">اطلاعات شخصی</h1>
				<div onClick={() => setIsUserAccountInfoEdit(true)} className="flex items-center gap-1 cursor-pointer">
					<Image src={editImg} alt="icon" />
					<p className="text-[#009ECA]">ویرایش اطلاعات</p>
				</div>
			</div>
			<div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
				<div className="flex items-center gap-3 justify-between sm:justify-start">
					<p className="text-[14px] text-black font-normal">
						نام و نام خانوادگی
					</p>
					{data.data.firstName ? (
						<h1 className="text-base text-[#282828] font-medium">
							{data.data.firstName}
						</h1>
					) : (
						<h1 className="text-base text-[#282828] font-medium">_</h1>
					)}
				</div>
				<div className="flex items-center gap-3 justify-between sm:justify-start">
					<p className="text-[14px] text-black font-normal">کدملی</p>
					{data.data.nationalCode ? (
						<h1 className="text-base text-[#282828] font-medium">
							{data.data.nationalCode}
						</h1>
					) : (
						<h1 className="text-base text-[#282828] font-medium">_</h1>
					)}
				</div>
				<div className="flex items-center gap-3 justify-between sm:justify-start">
					<p className="text-[14px] text-black font-normal">جنسیت</p>
					{data.data.gender ? (
						<h1 className="text-base text-[#282828] font-medium">
							{data.data.gender}
						</h1>
					) : (
						<h1 className="text-base text-[#282828] font-medium">_</h1>
					)}
				</div>
				<div className="flex items-center gap-3 justify-between sm:justify-start">
					<p className="text-[14px] text-black font-normal">تاریخ تولد</p>
					{data.data.birthDate ? (
						<h1 className="text-base text-[#282828] font-medium">
							{data.data.birthDate}
						</h1>
					) : (
						<h1 className="text-base text-[#282828] font-medium">_</h1>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserAccountInfo;
