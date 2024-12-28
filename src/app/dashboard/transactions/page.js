"use client";
import Empty from "@/components/atoms/Empty";
import Spinner from "@/components/templates/spinner";
import { useUserTransactions } from "@/core/services/queries";
import dateAndTimeToPersian from "@/core/utils/dateAndTimeToPersian";
import formatNumber from "@/core/utils/formatNumber";

const Transactions = () => {
	const { data, isPending } = useUserTransactions();

	if (isPending) return <Spinner/>;
	if (data.data.length === 0) return <Empty txt="تراکنشی ندارید" />;

	return (
		<div>
			<div className="grid grid-cols-4 font-normal text-base text-black bg-[#f3f3f3] p-4 ">
				<h1>تاریخ و ساعت</h1>
				<h1>مبلغ(تومان)</h1>
				<h1>نوع تراکنش</h1>
				<h1>شماره سفارش</h1>
			</div>
			<div>
				{data?.data?.map((item) => (
					
					<div key={item.createdAt} className="grid grid-cols-4 p-4 ">
						<p>{dateAndTimeToPersian(item.createdAt)}</p>
						<p>{formatNumber(item.amount)}</p>
						<p>{item.type}</p>
						<p>{item.id}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
