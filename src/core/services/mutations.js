import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useLogin = () => {
	const mutationFn =  (data) => {
		return api.post("auth/send-otp", data)
	};
	return useMutation({ mutationFn });
};

const useSendOtp = () => {
	const mutationFn =  (data) => {
	 return api.post("auth/check-otp", data)
	};
	return useMutation({ mutationFn });
};
export { useLogin , useSendOtp };
