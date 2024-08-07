import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, userAuth } from "src/reduxToolkit/slices/authSlice";

const Header = () => {
	const { loading, user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userAuth());
	}, []);

	return (
		<div className="flex sticky top-0 z-10 bg-white items-center  py-1 shadow-[0px_0px_60px_0px_rgba(0,0,0,0.15)] px-1 py-0.5 md:px-2 md:py-1 h-[40px] md:h-[55px] mb-4 md:mb-10">
			<div className="container max-w-screen-lg mx-auto">
				<nav className="flex items-center justify-between px-2">
					<div className="flex items-center gap-x-2 md:gap-x-4 text-sm md:text-base">
						<Link href="/">
							<a className=" px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:border-purple-600 hover:text-purple-600 text-gray-700">
								خانه
							</a>
						</Link>
						<Link href="/blogs">
							<a className=" px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:border-purple-600 hover:text-purple-600  text-gray-700">
								بلاگ
							</a>
						</Link>
					</div>
					<div
						className={`flex items-center gap-x-2 md:gap-x-4 text-sm md:text-base ${
							loading ? "opacity-30 blur-sm" : ""
						}`}
					>
						{user ? (
							<>
								<Link href="/dashboard">
									<a className="flex items-center gap-x-1 md:gap-x-2 text-gray-500 px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:border-purple-600 hover:text-purple-600  text-gray-700">
										<UserIcon className="w-4 h-4 md:w-6 md:h-6 fill-current " />
										<span>پروفایل</span>
									</a>
								</Link>
								<button
									className="rounded-lg px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:text-red-50 hover:bg-red-500  text-red-600"
									onClick={() => dispatch(signOut(user))}
								>
									خروج
								</button>
							</>
						) : (
							<>
								<Link href="/auth/signin">
									<a className=" px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:border-purple-600 hover:text-purple-600  text-gray-700">
										ورود
									</a>
								</Link>
								<Link href="/auth/signup">
									<a className=" px-1 py-0.5 md:px-2 md:py-1 cursor-pointer font-bold  hover:border-b-2 hover:border-purple-600 hover:text-purple-600  text-gray-700">
										ثبت نام
									</a>
								</Link>
							</>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
