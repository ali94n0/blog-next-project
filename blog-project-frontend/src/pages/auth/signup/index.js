// LoginForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/modules/Input";
import Router from "next/router";
import { useAuth, useAuthDispatch } from "src/contexts/AuthContext";
import Loader from "@/components/modules/Loader";

const SignupForm = () => {
	const { state } = useAuth();
	const { dispatch } = useAuthDispatch();

	useEffect(() => {
		if (state.user) Router.push("/dashboard");
	}, [state.user]);

	const onSubmit = (values) => {
		const { confirmPassword, ...dataToSend } = values;
		dispatch({ type: "SIGNUP", payload: dataToSend });
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phoneNumber: "",
			password: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(6, "نام باید حداقل ۶ کاراکتر باشد")
				.required("وارد کردن نام الزامی است"),
			email: Yup.string()
				.email("ایمیل نامعتبر است")
				.required("وارد کردن ایمیل الزامی است"),
			password: Yup.string()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					"رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ، حروف کوچک، عدد و کاراکتر ویژه باشد",
				)
				.required("وارد کردن رمز عبور الزامی است"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد")
				.required("تایید رمز عبور الزامی است"),
			phoneNumber: Yup.string()
				.matches(/^[0-9]{11}$/, "شماره تلفن باید ۱۱ رقم باشد")
				.required("وارد کردن شماره تلفن الزامی است"),
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
						فرم ثبتنام
					</h2>
					<Input
						label="نام"
						name="name"
						type="text"
						placeholder="نام خود را وارد کنید"
						formik={formik}
					/>
					<Input
						label="ایمیل"
						name="email"
						type="email"
						placeholder="ایمیل خود را وارد کنید"
						formik={formik}
					/>
					<Input
						label="شماره تلفن"
						name="phoneNumber"
						type="text"
						placeholder="شماره تلفن خود را وارد کنید"
						formik={formik}
					/>
					<Input
						label="رمز عبور"
						name="password"
						type="password"
						placeholder="رمز عبور خود را وارد کنید"
						formik={formik}
					/>
					<Input
						label="تایید رمز عبور"
						name="confirmPassword"
						type="password"
						placeholder="تایید رمز عبور خود را وارد کنید"
						formik={formik}
					/>

					{state.loading ? (
						<Loader />
					) : (
						<button
							type="submit"
							disabled={!formik.isValid}
							className="mt-2 rounded-lg py-1 px-2 md:px-3 md:py-2 bg-purple-500 hover:bg-purple-600 text-purple-50 font-bold disabled:text-white disabled:bg-gray-300"
						>
							ثبتنام
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
