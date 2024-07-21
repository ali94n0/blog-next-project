// LoginForm.js
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/modules/Input";

import Loader from "@/components/modules/Loader";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "src/reduxToolkit/slices/authSlice";
import Link from "next/link";

const LoginForm = () => {
	const { loading, user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) Router.push("/dashboard");
	}, [user]);

	const onSubmit = (values) => {
		dispatch(signIn(values));
	};

	const formik = useFormik({
		initialValues: { email: "", password: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.email("ایمیل نامعتبر است")
				.required("وارد کردن ایمیل الزامی است"),
			password: Yup.string()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					"رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، حروف کوچک، عدد و کاراکتر ویژه باشد",
				)
				.required("وارد کردن رمز عبور الزامی است"),
		}),
		validateOnMount: true,
		onSubmit,
	});

	return (
		<div className="flex  justify-center min-h-screen py-8">
			<div className="container max-w-screen-sm mx-auto px-4 md:px-20">
				<form
					onSubmit={formik.handleSubmit}
					className="py-8 px-4 flex flex-col gap-y-2 bg-white shadow-md rounded-lg w-full"
				>
					<h2 className="font-bold text-xl flex justify-center mb-2 text-purple-800 pb-2 border-b-2 border-purple-700">
						فرم ورود
					</h2>
					<Input
						label="ایمیل"
						name="email"
						type="email"
						placeholder="ایمیل خود را وارد کنید"
						formik={formik}
					/>
					<Input
						label="رمز عبور"
						name="password"
						type="password"
						placeholder="رمز عبور خود را وارد کنید"
						formik={formik}
					/>
					{loading ? (
						<Loader />
					) : (
						<button
							type="submit"
							disabled={!formik.isValid}
							className="mt-2 rounded-lg py-1 px-2 md:px-3 md:py-2 bg-purple-500 hover:bg-purple-600 text-purple-50 font-bold disabled:text-white disabled:bg-gray-300"
						>
							ورود
						</button>
					)}
					<div className="p-2">
						<p className="text-xs md:text-sm text-gray-600">
							هنوز ثبت نام نکردید؟{" "}
							<Link href="/auth/signup">
								<a className="text-purple-500">ثبت نام کنید</a>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
