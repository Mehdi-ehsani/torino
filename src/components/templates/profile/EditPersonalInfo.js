"use client";

import { usePutProfile } from "@/core/services/mutations";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAccountInfoSchema } from "@/core/schema";

const EditPersonalInfo = ({ data, setIsPersonalInfoEdit }) => {
	const [email, setEmail] = useState("");
	const { mutate } = usePutProfile();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userAccountInfoSchema),
	});

	const sendHandler = async (formData) => {
		const data = { email: formData.email };
		mutate(data, {
			onSuccess: (data) =>  toast.success("اطلاعات حساب کاربری با موفقیت تغییر کرد"),
			onError: (error) => toast.error("خطا در ثبت اطلاعات"),
		});

		setIsPersonalInfoEdit(false);
	};
	return (
		<form onSubmit={handleSubmit(sendHandler)} className="border border-[#00000020] rounded-[10px] m-4 p-4">
			<h1 className=" text-black font-semibold">اطلاعات حساب کاربری</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
				<div className="flex items-center gap-3">
					<p className="text-[14px] text-black font-normal">شماره موبایل</p>
					<h1 className="text-base text-[#282828] font-medium">
						{data.data.mobile}
					</h1>
				</div>
				<div className="flex flex-col sm:flex-row justify-between items-start gap-3">
					<div className="flex flex-col gap-1">
					<input
						{...register("email")}
						className={`sm:w-[255px] w-full block h-[45px] rounded-[5px] px-2  border border-[#00000050] ${errors?.email ? "border border-red-600 outline-red-600" : ""} `}
						type="text"
						placeholder="آدرس ایمیل"
					/>
					{!!errors.email && <span className="text-red-600 text-base block ">{errors.email.message}</span>}
					</div>
					<button
						className="sm:w-[122px] w-full h-[45px] rounded-[5px] bg-primery text-white font-semibold"
					>
						تایید
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditPersonalInfo;
