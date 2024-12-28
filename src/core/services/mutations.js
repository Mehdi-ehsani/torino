import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";
import { setCookie } from "../utils/cookie";

const useLogin = () => {
	const mutationFn =  (data) => {
		return api.post("auth/send-otp", data)
	};
	return useMutation({ mutationFn });
};

const useSendOtp = () => {
	const queryClient = useQueryClient()
	const mutationFn =  (data) => {
	 return api.post("auth/check-otp", data)
	};
	const onSuccess = (data) => {
		setCookie("accessToken", data?.data?.accessToken);
		setCookie("refreshToken", data?.data?.refreshToken);
		queryClient.invalidateQueries({ queryKey: ["profile"] });
	  };
	return useMutation({ mutationFn , onSuccess});
};
const useSendToBasket = (id) => {
	const mutationFn =  (data) => {
	 return api.put(`basket/${id}`, data)
	};
	return useMutation({ mutationFn });
};
const useSendOrder = () => {
	const mutationFn =  (data) => {
	 return api.post("order", data)
	};
	return useMutation({ mutationFn });
};
const usePutProfile = () => {
	const queryClient = useQueryClient();

	const mutationFn =  (data) => {
	 return api.put("user/profile" , data)
	};
	const onSuccess = (data) => {
		queryClient.invalidateQueries({ queryKey: ["profile"] });
	  };
	return useMutation({ mutationFn , onSuccess});
};
export { useLogin , useSendOtp , useSendOrder , useSendToBasket , usePutProfile};
