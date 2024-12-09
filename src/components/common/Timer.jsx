import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, setIsOtpShow }) => {
	const { seconds, minutes,} = useTimer({
		expiryTimestamp,
		onExpire: () => setIsOtpShow(false),
	});
	return (
		<p className="text-base font-light text-[#282828] mt-3">
			<span>{minutes}</span>:<span>{seconds}</span> تا ارسال مجدد کد
		</p>
	);
};

export default Timer;
