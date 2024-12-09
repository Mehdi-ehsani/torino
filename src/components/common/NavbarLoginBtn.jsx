"use client";
import userLogo from "../../assets/image/user.png";
import Image from "next/image";
import LoginForm from "../templates/authForm/LoginForm";
import { useState } from "react";

const NavbarLoginBtn = () => {
	const [isShowLogin, setIsShowLogin] = useState(false);

	return (
		<>
			<div className="login-btn" onClick={() => setIsShowLogin(true)}>
				<Image src={userLogo} alt="user logo" />
				<button className="font-medium text-[18px] text-primery">
					ورود | ثبت نام
				</button>
			</div>
			{isShowLogin && <LoginForm setIsShowLogin={setIsShowLogin} />}
		</>
	);
};

export default NavbarLoginBtn;
