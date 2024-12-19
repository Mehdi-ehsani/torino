"use client";
import { useTourDetail } from "@/core/services/queries";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import calculateDateDifference from "@/core/utils/calculateDateDifference";
import formatNumber from "@/core/utils/formatNumber";
import userImg from "../../assets/image/profile3.png";
import calendarImg from "../../assets/image/calendar3.png";

const orderPage = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get("q");
	const { data, isPending } = useTourDetail(id);
	const dayCount = calculateDateDifference(
		data?.data.endDate,
		data?.data.startDate
	);

	if (isPending) return <h1>loading...</h1>;
	return (
		<div className="w-full h-[590px] gap-4 grid grid-cols-4 pt-10 px-[126px] bg-[#f3f3f3]">
			<div className="col-span-3 border border-[#00000020] h-[228px] rounded-[10px] bg-white px-6 py-8">
				<div className="flex items-center gap-2">
					<Image src={userImg} alt="icon" />
					<h1 className="text-2xl font-normal text-black">مشخصات مسافر</h1>
				</div>
				<div className="grid grid-cols-3 gap-4 mt-4">
					<input
						type="text"
						placeholder="نام و نام خانوادگی"
						className="h-[50px] border border-[#00000050] rounded-[5px] px-2"
					/>
					<input
						type="number"
						placeholder="کد ملی"
						className="h-[50px] border border-[#00000050] rounded-[5px] px-2"
					/>
					<div className="h-[50px] flex items-center gap-1 border border-[#00000050] rounded-[5px] px-2">
						<Image src={calendarImg} alt="icon" />
						<p className="text-[#bec3ce]">تاریخ تولد</p>
					</div>
					<select className="h-[50px] text-[#bec3ce] border border-[#00000050] rounded-[5px] px-2" name="gender" id="gender">
						<option value="" selected disabled >جنسیت</option>
						<option className="text-black" value="male">مرد</option>
						<option className="text-black" value="female">زن</option>
					</select>
				</div>
			</div>
			<div className="col-span-1 flex flex-col justify-between bg-white rounded-[10px] h-[228px]">
				<div className="flex h-16 border-b border-dashed px-4 items-center justify-between">
					<h1 className="text-[24px] font-semibold">{data.data.title}</h1>
					<h2 className="text-[#282828] text-base  font-normal">
						{" " + dayCount + " "} روز {" " + dayCount - 1 + " "}شب{" "}
					</h2>
				</div>
				<div className=" flex px-4 items-center justify-between">
					<h1 className="text-black text-base  font-normal">قیمت نهایی</h1>
					<h2 className="flex items-center gap-1 text-[28px] font-medium text-[#009ECA]">
						{formatNumber(data.data.price)}
						<span className="text-[14px] font-normal text-[#28282880]">
							تومان
						</span>
					</h2>
				</div>
				<button className="mx-4 mb-4 w-[253px] h-[56px] rounded-[10px] bg-primery text-white text-2xl ">
					ثبت و خرید نهایی
				</button>
			</div>
		</div>
	);
};

export default orderPage;
