import Router from "next/router";
import { useEffect } from "react";
import { useAuth } from "src/contexts/AuthContext";

const Dashboard = () => {
	const {
		state: { user },
	} = useAuth();

	useEffect(() => {
		if (!user) Router.push("/auth/signin");
	}, [user]);

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="container max-w-screen-md mx-auto bg-white rounded-lg shadow-md ">
				<div className="p-4 border-b border-gray-200 flex items-center justify-center">
					<h1 className="text-2xl font-bold text-purple-700">داشبورد</h1>
				</div>
				<div className="p-6">
					<div className="mb-6">
						<h2 className="text-xl font-medium text-gray-700">
							اطلاعات کاربری
						</h2>
						<div className="mt-4">
							<div className="flex items-center gap-x-4 mb-2">
								<span className=" text-gray-600 ">نام:</span>
								<span className="text-gray-500">{user?.name}</span>
							</div>
							<div className="flex items-center gap-x-4 mb-2">
								<span className="text-gray-600">ایمیل:</span>
								<span className="text-gray-500">{user?.email}</span>
							</div>
							<div className="flex items-center gap-x-4 mb-2">
								<span className="text-gray-600">شماره:</span>
								<span className="text-gray-500">{user?.phoneNumber}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
