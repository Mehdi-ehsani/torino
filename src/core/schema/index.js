import { object, string } from "yup";
const loginSchema = object({
    phoneNumber: string().length(11, 'شماره تماس باید یازده رقم باشد').required("شماره تماس را وارد کنید")
}) 
const checkoutSchema = object({
    nationalCode: string().length(10, "کد ملی باید ده رقم باشد").required("کد ملی را وارد کنید"),
    fullName: string().min(5, "نام خود را صحیح وارد کنید").required("نام خود را وارد کنید"),
    gender: string().required("جنسیت را وارد کنید"),
})
const userAccountInfoSchema = object({
    email: string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "ایمیل شما صحیح نمی‌باشد").required("ایمیل را وارد کنید"),
})
const BankAccountSchema = object({
    shaba_code: string().length(24,"شماره شبا باید 24 رقم باشد").required(),
    debitCard_code: string().length(16, "شماره کارت باید 16 رقم باشد"),
    accountIdentifier: string().min(12, "شماره حساب حداقل 12 رقم میباشد").max(16 , "شماره حساب حداکثر 16 رقم میباشد")
})
export {loginSchema , checkoutSchema, userAccountInfoSchema , BankAccountSchema }
