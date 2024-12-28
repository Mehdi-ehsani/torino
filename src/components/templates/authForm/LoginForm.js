"use client";
import Image from "next/image";
import closeImg from "../../../assets/image/close.png";
import { useState } from "react";
import OtpForm from "./OtpForm";
import { useLogin } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/core/schema";

const LoginForm = ({ setIsShowLogin }) => {
	const [isOtpShow, setIsOtpShow] = useState(false);
	const [number, setNumber] = useState("")
	const { mutate } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const sendOtp = (data) => {
		setNumber(data.phoneNumber)
		mutate(
			{ mobile: data.phoneNumber },
			{
				onSuccess: (data) => {
					console.log(data.data);
					toast.success("کد ورود " + data.data.code);
				},
				onError: (error) => toast.error("مشکلی در ورود پیش  مجدد تلاش کنید"),
			}
		);
		setIsOtpShow(true);
	};
	return (
		<div onClick={() => setIsShowLogin(false)} className="login-form-container">
			{isOtpShow ? (
				<OtpForm
					setIsOtpShow={setIsOtpShow}
					setIsShowLogin={setIsShowLogin}
					number={number}
				/>
			) : (
				<form
					onClick={(e) => e.stopPropagation()}
					onSubmit={handleSubmit(sendOtp)}
					className="login-form"
				>
					<h1 className="login-form-title">ورود به تورینو</h1>
					<label className="block mb-2 mt-7 ">
						شماره موبایل خود را وارد کنید
					</label>
					<input
						{...register("phoneNumber")}
						placeholder="0912***4253"
						className={`border border-[#00000025] rounded-md w-full h-[54px] px-4 placeholder:text-[15px]  ${
							errors?.phoneNumber ? "border border-red-600 outline-red-600" : ""
						}`}
					/>
					{!!errors?.phoneNumber && (
						<span className="text-red-600 text-base block mt-2">
							{errors.phoneNumber.message}
						</span>
					)}
					<button type="submit" className="login-form-submit-btn">
						ارسال کد تایید
					</button>
					<Image
						onClick={() => setIsShowLogin(false)}
						src={closeImg}
						alt="close icon"
						className="absolute top-4 left-4 cursor-pointer"
					/>
				</form>
			)}
		</div>
	);
};

export default LoginForm;
