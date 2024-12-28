"use client";
import { useProfile } from "@/core/services/queries";
import { useState } from "react";

import BankAccountInfo from "@/components/templates/profile/BankAccountInfo";
import PersonalInfo from "@/components/templates/profile/PersonalInfo";
import UserAccountInfo from "@/components/templates/profile/UserAccountInfo";
import EditPersonalInfo from "@/components/templates/profile/EditPersonalInfo";
import EditUserAccountInfo from "@/components/templates/profile/EditUserAccountInfo";
import EditBankAccountInfo from "@/components/templates/profile/EditBankAccountInfo";
import Spinner from "@/components/templates/spinner";

const Profile = () => {
	const { data, isPending } = useProfile();
	const [isPersonalInfoEdit, setIsPersonalInfoEdit] = useState(false);
	const [isUserAccountInfoEdit, setIsUserAccountInfoEdit] = useState(false);
	const [isBankAccountInfoEdit, setIsBankAccountInfoEdit] = useState(false);

	if (isPending) return <Spinner/>;
	return (
		<>
			{isPersonalInfoEdit ? (
				<EditPersonalInfo
					data={data}
					setIsPersonalInfoEdit={setIsPersonalInfoEdit}
				/>
			) : (
				<PersonalInfo
					data={data}
					setIsPersonalInfoEdit={setIsPersonalInfoEdit}
				/>
			)}
			{isUserAccountInfoEdit ? (
				<EditUserAccountInfo
					setIsUserAccountInfoEdit={setIsUserAccountInfoEdit}
				/>
			) : (
				<UserAccountInfo
					data={data}
					setIsUserAccountInfoEdit={setIsUserAccountInfoEdit}
				/>
			)}
			{isBankAccountInfoEdit ? (
				<EditBankAccountInfo
				setIsBankAccountInfoEdit={setIsBankAccountInfoEdit}
			/>
			) : (
				<BankAccountInfo
					data={data}
					setIsBankAccountInfoEdit={setIsBankAccountInfoEdit}
				/>
			)}
		</>
	);
};

export default Profile;
