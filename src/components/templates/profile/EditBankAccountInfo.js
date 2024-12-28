"use client";

import { usePutProfile } from "@/core/services/mutations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BankAccountSchema } from "@/core/schema";
import toast from "react-hot-toast";

const EditBankAccountInfo = ({ setIsBankAccountInfoEdit }) => {
	const { mutate } = usePutProfile();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(BankAccountSchema),
	});
	const sendHandler = (formData) => {
		const data = {
			payment: {
				shaba_code: formData.shaba_code,
				debitCard_code: formData.debitCard_code,
				accountIdentifier: formData.accountIdentifier,
			},
		};
		mutate(data, {
			onSuccess: (data) => toast.success("اطلاعات حساب بانکی با موفقیت تغییر کرد"),
			onError: (error) => toast.error("خطا در ثبت اطلاعات"),
		});

		setIsBankAccountInfoEdit(false);
	};
	const exitHandler = () => {
		setIsBankAccountInfoEdit(false);
	};
	return (
		<form
			onSubmit={handleSubmit(sendHandler)}
			className="border border-[#00000020] rounded-[10px] mx-4"
		>
			<h1 className=" text-black font-semibold p-4">اطلاعات حساب بانکی</h1>

			<div className="grid grid-cols-3 gap-4 mt-4 px-4">
				<div className="flex flex-col gap-1">
					<input
						{...register("shaba_code")}
						type="text"
						placeholder="شماره شبا"
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.shaba_code ? "border border-red-600 outline-red-600" : ""
						} `}
					/>
					{!!errors.shaba_code && (
						<span className="text-red-600 text-base block ">
							{errors.shaba_code.message}
						</span>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						{...register("debitCard_code")}
						type="number"
						placeholder="شماره کارت"
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.debitCard_code
								? "border border-red-600 outline-red-600"
								: ""
						} `}
					/>
					{!!errors.debitCard_code && (
						<span className="text-red-600 text-base block ">
							{errors.debitCard_code.message}
						</span>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						{...register("accountIdentifier")}
						type="number"
						placeholder="شماره حساب"
						className={`h-[50px] border border-[#00000050] rounded-[5px] px-2 ${
							errors?.accountIdentifier
								? "border border-red-600 outline-red-600"
								: ""
						} `}
					/>
					{!!errors.accountIdentifier && (
						<span className="text-red-600 text-base block ">
							{errors.accountIdentifier.message}
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

export default EditBankAccountInfo;
