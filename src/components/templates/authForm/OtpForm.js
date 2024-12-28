"use client";
import OtpInput from "react18-input-otp";

import { useState } from "react";
import Image from "next/image";
import arrowImg from "../../../assets/image/arrow-left.png";
import { useSendOtp } from "@/core/services/mutations";
import Timer from "@/components/common/Timer";
import toast from "react-hot-toast";


const OtpForm = ({ number, setIsOtpShow, setIsShowLogin }) => {
	const [otp, setOtp] = useState();
	const { mutate } = useSendOtp();
	const otpShowTime = new Date();
	otpShowTime.setSeconds(otpShowTime.getSeconds() + 120);

	const handleOtpChange = (enteredOtp) => {
		setOtp(enteredOtp);
	};
	const sendOtp = () => {
		mutate(
			{ mobile: number, code: otp },
			{
				onSuccess: (data) => {
					console.log("succes", data.data);
					toast.success("با موفقیت وارد شدید")
					setIsShowLogin(false);
				},
				onError: (error) => toast.error("کد تایید صحیح نمیباشد"),
			}
		);
	};
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="otp-form flex flex-col items-center"
		>
			<h1 className="otp-form-title">کد تایید را وارد کنید.</h1>
			<p className="mt-2 mb-4">کد تایید به شماره {number} ارسال شد</p>
			<OtpInput
				containerStyle={{ gap: "12px", direction: "ltr" }}
				inputStyle={{
					width: "100%",
					maxWidth: "53px",
					height: "53px",
					borderRadius: "6px",
					border: "1px solid #00000025",
				}}
				value={otp}
				onChange={handleOtpChange}
				numInputs={6}
			/>

			<Timer expiryTimestamp={otpShowTime} setIsOtpShow={setIsOtpShow} />

			<button onClick={sendOtp} className="otp-form-sunmit-btn">
				ورود به تورینو
			</button>
			<Image
				onClick={() => setIsOtpShow(false)}
				className="absolute top-4 left-4 cursor-pointer"
				src={arrowImg}
				alt="arrow icon"
			/>
		</div>
	);
};

export default OtpForm;
