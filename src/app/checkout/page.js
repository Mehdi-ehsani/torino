"use client";
import { useGetBasket } from "@/core/services/queries";
import Image from "next/image";
import { useForm ,Controller} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import calculateDateDifference from "@/core/utils/calculateDateDifference";
import formatNumber from "@/core/utils/formatNumber";
import userImg from "../../assets/image/profile3.png";
import calendarImg from "../../assets/image/calendar3.png";
import { useSendOrder } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import { checkoutSchema } from "@/core/schema";
import toast from "react-hot-toast";
import { DatePicker } from "zaman";
import dateToPersian from "@/core/utils/dateToPersian";
import { useState } from "react";
import Spinner from "@/components/templates/spinner";

const Checkout = () => {
	const router = useRouter();
	const { data, isPending } = useGetBasket();
	const [date, setDate] = useState("");
	const dayCount = calculateDateDifference(
		data?.data.endDate,
		data?.data.startDate
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control
	} = useForm({
		resolver: yupResolver(checkoutSchema),
	});

	const { mutate } = useSendOrder();

	const orderHandler = (formdata) => {
		const orderData = {
			nationalCode: formdata.nationalCode,
			fullName: formdata.fullName,
			gender: formdata.gender,
			birthDate: date,
		};

		mutate(orderData, {
			onSuccess: (data) => {
				toast.success(data.data.message);
				router.replace("/dashboard/my-tours");
			},
			onError: (error) => {
				toast.error(error.message);
				console.log(error);
			},
		});
	};
	if (isPending) return <Spinner/>;
	return (
		<form
			onSubmit={handleSubmit(orderHandler)}
			className="w-full h-fit  gap-4 grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 py-10 px-[31px] lg:px-[126px] bg-[#f3f3f3]"
		>
			<div className="2xl:col-span-3 col-span-1  border border-[#00000020] min-h-[228px] h-fit rounded-[10px] bg-white px-6 py-8">
				<div className="flex items-center gap-2">
					<Image src={userImg} alt="icon" />
					<h1 className="text-2xl font-normal text-black">مشخصات مسافر</h1>
				</div>
				<div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
					<div className="flex flex-col gap-1">
						<input
							{...register("fullName")}
							placeholder="نام و نام خانوادگی"
							type="text"
							className={`h-[50px] border border-[#00000050] rounded-[5px] px-2  ${
								errors?.fullName ? "border border-red-600 outline-red-600" : ""
							}`}
						/>
						{!!errors?.fullName && (
							<span className="text-red-600 text-base block mt-2">
								{errors.fullName.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<input
							{...register("nationalCode")}
							placeholder="کد ملی"
							type="text"
							className={`h-[50px] border border-[#00000050] rounded-[5px] px-2  ${
								errors?.nationalCode
									? "border border-red-600 outline-red-600"
									: ""
							}`}
						/>
						{!!errors?.nationalCode && (
							<span className="text-red-600 text-base block mt-2">
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
					<select
						{...register("gender")}
						className={`h-[50px] text-[#bec3ce] border ${
							errors.gender ? "border-red-500" : "border-[#00000050]"
						} rounded-[5px] px-2`}
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
					{!!errors?.gender && (
						<span className="text-red-500">این فیلد ضروری است</span>
					)}
				</div>
			</div>
			<div className="col-span-1 px-4 flex flex-col justify-between bg-white rounded-[10px] mx-auto lg:mx-0 w-[330px] h-[228px]">
				<div className="flex h-16 border-b border-dashed  items-center justify-between">
					<h1 className="text-[24px] font-semibold">{data.data.title}</h1>
					<h2 className="text-[#282828] text-base  font-normal">
						{" " + dayCount + " "} روز {" " + dayCount - 1 + " "}شب{" "}
					</h2>
				</div>
				<div className=" flex  items-center justify-between">
					<h1 className="text-black text-base  font-normal">قیمت نهایی</h1>
					<h2 className="flex items-center gap-1 text-[28px] font-medium text-[#009ECA]">
						{formatNumber(data.data.price)}
						<span className="text-[14px] font-normal text-[#28282880]">
							تومان
						</span>
					</h2>
				</div>
				<button
					type="submit"
					className="mb-4 w-full h-[56px] rounded-[10px] bg-primery text-white text-2xl "
				>
					ثبت و خرید نهایی
				</button>
			</div>
		</form>
	);
};

export default Checkout;
