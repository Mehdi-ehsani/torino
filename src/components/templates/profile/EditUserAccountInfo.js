"use client";
import Image from "next/image";

import calendarImg from "../../../assets/image/calendar3.png";
import { usePutProfile } from "@/core/services/mutations";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/core/schema";
import { DatePicker } from "zaman";
import dateToPersian from "@/core/utils/dateToPersian";
import { useState } from "react";

const EditUserAccountInfo = ({ setIsUserAccountInfoEdit }) => {
	const { mutate } = usePutProfile();
	const [date, setDate] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: yupResolver(checkoutSchema),
	});

	const exitHandler = () => {
		setIsUserAccountInfoEdit(false);
	};
	const sendHandler = (data) => {
		const fromData = {
			firstName: data.fullName,
			birthDate: date,
			nationalCode: data.nationalCode,
			gender: data.gender,
		};
		mutate(fromData, {
			onSuccess: (data) => toast.success("اطلاعات شخصی با موفقیت تغییر کرد"),
			onError: (error) => toast.error("خطا در ثبت اطلاعات"),
		});

		setIsUserAccountInfoEdit(false);
	};
	return (
		<form
			onSubmit={handleSubmit(sendHandler)}
			className="border border-[#00000020] rounded-[10px] mx-4"
		>
			<h1 className=" text-black font-semibold p-4">اطلاعات شخصی</h1>

			<div className="grid grid-cols-3 gap-4 mt-4 px-4">
				<div className="flex flex-col gap-1">
					<input
						{...register("fullName")}
						type="text"
						placeholder="نام و نام خانوادگی"
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.fullName ? "border border-red-600 outline-red-600" : ""
						} `}
					/>
					{!!errors.fullName && (
						<span className="text-red-600 text-base block ">
							{errors.fullName.message}
						</span>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						{...register("nationalCode")}
						type="number"
						placeholder="کد ملی"
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.nationalCode
								? "border border-red-600 outline-red-600"
								: ""
						} `}
					/>
					{!!errors.nationalCode && (
						<span className="text-red-600 text-base block ">
							{errors.nationalCode.message}
						</span>
					)}
				</div>
				<div className="h-[50px] flex items-center gap-1 border border-[#00000050] rounded-[5px] px-2">
					<Image src={calendarImg} alt="icon" />
					<Controller
						control={control}
						name="birthDate"
						render={({ field: { onChange } }) => (
							<DatePicker
								round="x2"
								accentColor="#28A745"
								onChange={(e) => {
									setDate(dateToPersian(e.value));
								}}
							/>
						)}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<select
						{...register("gender")}
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.gender ? "border border-red-600 outline-red-600" : ""
						} `}
						name="gender"
						id="gender"
					>
						<option value="" disabled>
							جنسیت
						</option>
						<option className="text-black" value="male">
							مرد
						</option>
						<option className="text-black" value="female">
							زن
						</option>
					</select>
					{!!errors.gender && (
						<span className="text-red-600 text-base block ">
							{errors.gender.message}
						</span>
					)}
				</div>
			</div>
			<div className="flex items-center gap-4 justify-end border-t px-4 py-2 mt-4 border-[#00000020] ">
				<button
					type="submit"
					className="w-[144px] h-[41px] rounded-[5px] bg-primery text-white font-semibold"
				>
					تایید
				</button>
				<button
					onClick={exitHandler}
					className="w-[144px] h-[41px] rounded-[5px] text-primery border border-primery font-semibold"
				>
					انصراف
				</button>
			</div>
		</form>
	);
};

export default EditUserAccountInfo;
