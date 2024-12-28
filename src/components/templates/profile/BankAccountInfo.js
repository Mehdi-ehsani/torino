'use client'
import editImg from "../../../assets/image/edit-2.png";

import Image from "next/image";

const BankAccountInfo = ({data , setIsBankAccountInfoEdit}) => {

  return (
    <div className="border border-[#00000020] rounded-[10px] m-4 p-4">
    <div className="flex items-center justify-between">
        <h1 className=" text-black font-semibold">اطلاعات حساب بانکی</h1>
        <div onClick={() => setIsBankAccountInfoEdit(true)} className="flex items-center gap-1 cursor-pointer">
            <Image src={editImg} alt="icon" />
            <p className="text-[#009ECA]">ویرایش اطلاعات</p>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="flex items-center gap-3 sm:justify-start justify-between">
            <p className="text-[14px] text-black font-normal">شماره شبا</p>
            {data.data.payment?.shaba_code ? (
                <h1 className="text-base text-[#282828] font-medium">
                    {data.data.payment?.shaba_code}
                </h1>
            ) : (
                <h1 className="text-base text-[#282828] font-medium">_</h1>
            )}
        </div>
        <div className="flex items-center gap-3 sm:justify-start justify-between">
            <p className="text-[14px] text-black font-normal">شماره کارت</p>
            {data.data.payment?.debitCard_code ? (
                <h1 className="text-base text-[#282828] font-medium">
                    {data.data.payment?.debitCard_code}
                </h1>
            ) : (
                <h1 className="text-base text-[#282828] font-medium">_</h1>
            )}
        </div>
        <div className="flex items-center gap-3 sm:justify-start justify-between">
            <p className="text-[14px] text-black font-normal">شماره حساب</p>
            {data.data.payment?.accountIdentifier ? (
                <h1 className="text-base text-[#282828] font-medium">
                    {data.data.payment?.accountIdentifier}
                </h1>
            ) : (
                <h1 className="text-base text-[#282828] font-medium">_</h1>
            )}
        </div>
    </div>
</div>
  )
}

export default BankAccountInfo