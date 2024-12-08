"use client";
import { setCookie } from "@/utils/cookie";
import { useState } from "react";
import OtpInput from "react18-input-otp";
import Image from "next/image";
import arrowImg from "../../assets/arrow-left.png"

const OtpForm = ({ number , setIsOtpShow , setIsShowLogin}) => {
	const [otp, setOtp] = useState();
	const handleOtpChange = (enteredOtp) => {
		setOtp(enteredOtp);
	};
	const sendOtp = async () => {
		const res = await fetch("http://localhost:6500/auth/check-otp", {
			method: "POST",
			body: JSON.stringify({
				mobile: number,
				code: otp,
			}),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();

    setCookie("accessToken" , data.accessToken)
    setCookie("refreshToken", data.refreshToken)
    setIsShowLogin(false)
	};
	return (
		<div onClick={e => e.stopPropagation()} className="otp-form flex flex-col items-center">
			<h1 className="otp-form-title">کد تایید را وارد کنید.</h1>
			<p className="mt-2 mb-4">کد تایید به شماره {number} ارسال شد</p>
			<OtpInput
				containerStyle={{ gap: "12px", direction: "ltr" }}
				inputStyle={{
					width: "58px",
					height: "53px",
					borderRadius: "6px",
					border: "1px solid #00000025",
				}}
				value={otp}
				onChange={handleOtpChange}
				numInputs={6}
			/>
			<p className="text-[14px] font-light text-[#282828] mt-3">
				1:24 تا ارسال مجدد کد
			</p>
			<button onClick={sendOtp} className="otp-form-sunmit-btn">
				ورود به تورینو
			</button>
      <Image onClick={() => setIsOtpShow(false)} className="absolute top-4 left-4 cursor-pointer" src={arrowImg}  alt="arrow icon"/>
		</div>
	);
};

export default OtpForm;
