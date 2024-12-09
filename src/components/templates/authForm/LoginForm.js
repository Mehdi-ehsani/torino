"use client";
import Image from "next/image";
import closeImg from "../../../assets/image/close.png";
import { useState } from "react";
import OtpForm from "./OtpForm";
import { useLogin } from "@/core/services/mutations";

const LoginForm = ({ setIsShowLogin }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isOtpShow, setIsOtpShow] = useState(false);
	const { mutate } = useLogin();

	const sendOtp = async () => {
		mutate(
			{ mobile: phoneNumber },
			{
				onSuccess: (data) => {
					console.log(data.data);
				},
				onError: (error) => console.log(error),
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
					number={phoneNumber}
				/>
			) : (
				<div onClick={(e) => e.stopPropagation()} className="login-form">
					<h1 className="login-form-title">ورود به تورینو</h1>
					<label className="block mb-2 mt-7 ">
						شماره موبایل خود را وارد کنید
					</label>
					<input
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						className="login-form-input"
						type="number"
						placeholder="0912***4253"
					/>
					<button onClick={sendOtp} className="login-form-submit-btn">
						ارسال کد تایید
					</button>
					<Image
						onClick={() => setIsShowLogin(false)}
						src={closeImg}
						alt="close icon"
						className="absolute top-4 left-4 cursor-pointer"
					/>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
