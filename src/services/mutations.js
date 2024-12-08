import { useMutation } from "@tanstack/react-query";
const useLogin = () => {
	const mutationFn = async (data) => {
		const res = await fetch("http://localhost:6500/auth/send-otp", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		});
		const resData = res.json();
		return resData;
	};
	return useMutation({ mutationFn });
};
export { useLogin };
