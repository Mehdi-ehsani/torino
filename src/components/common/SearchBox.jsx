"use client";
import Image from "next/image";
import locationImg from "./../../assets/image/location.png";
import searchImg from "./../../assets/image/search.png";
import calendarImg from "./../../assets/image/calendar.png";

import { DatePicker } from "zaman";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import useQuery from "@/core/hooks/query";
import { useRouter } from "next/navigation";

const SearchBox = () => {
	const { register, handleSubmit, control, reset } = useForm();
	const { getQuery } = useQuery();
	const router = useRouter();

	useEffect(() => {
		const originId = getQuery("originId");
		const destinationId = getQuery("destinationId");
		if (originId && destinationId) reset({ originId, destinationId });
		console.log({ originId, destinationId });
	}, []);

	const submitHandler = (form) => {
		const query = QueryString.stringify(flattenObject(form));
		router.push(`/tour?${query}`);
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className=" w-full lg:w-[900px] lg:h-[71px] h-fit px-2 grid grid-cols-2  lg:grid-cols-4 gap-2 items-center justify-between mx-auto mb-20 mt-10 lg:border border-[#0000025] rounded-[20px] "
		>
			<div className=" cursor-pointer w-full h-[56px] flex pr-3 items-center rounded-[12px] justify-start gap-2  lg:border-none border border-[#0000025]">
				<Image src={locationImg} alt="location image" />
				<select {...register("originId")}>
					<option className="text-[18px] font-medium px-2" value="" disabled>
						مبدا
					</option>
					<option className="text-[18px] font-medium px-2" value="1">
						تهران
					</option>
					<option className="text-[18px] font-medium px-2" value="2">
						سنندج
					</option>
          <option className="text-[18px] font-medium px-2" value="4">اصفهان</option>
          <option className="text-[18px] font-medium px-2" value="7">مازندران</option>
				</select>
			</div>
			<div className="cursor-pointer h-[56px] pr-3 flex items-center justify-start gap-2 lg:border-l-transparent lg:border-y-transparent border lg:rounded-none rounded-[12px] border-[#00000020]">
				<Image src={searchImg} alt="search image" />
				<select {...register("destinationId")}>
					<option value="" disabled>
						مقصد
					</option>
					<option value="1">تهران</option>
					<option value="2">سنندج</option>
					<option value="3">مادرید</option>
					<option value="4">اصفهان</option>
					<option value="5">سلیمانیه</option>
					<option value="6">هولر</option>
					<option value="7">مازندران</option>
					<option value="8">افرود</option>
					<option value="9">ایتالیا</option>
				</select>
			</div>
			<div className=" flex gap-4 flex-col lg:flex-row items-center justify-between col-span-2  lg:h-[56px] h-fit lg:pr-3 lg:border-r border-[#00000020]">
				<div className=" cursor-pointer relative flex items-center justify-start gap-2 h-[56px] lg:w-fit  w-full px-3 border rounded-[12px] lg:border-none border-[#00000020]">
					<Image src={calendarImg} alt="calendar image" />
					<Controller
						control={control}
						name="date"
						render={({ field: { onChange } }) => (
							<DatePicker
								round="x2"
								accentColor="#28A745"
								onChange={(e) =>
									onChange({
										startDate: DateToIso(e.from),
										endDate: DateToIso(e.to),
									})
								}
								range
							/>
						)}
					/>
				</div>
				<button
					type="submit"
					className="lg:w-[190px] w-full h-[51px] bg-[#28A745]  rounded-2xl text-white font-medium text-2xl"
				>
					جستجو
				</button>
			</div>
		</form>
	);
};

export default SearchBox;
