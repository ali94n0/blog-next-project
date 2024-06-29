import React from "react";

const Input = ({ label, formik, ...props }) => {
	return (
		<div className="flex flex-col gap-y-2 ">
			<label
				htmlFor={props.id || props.name}
				className="text-xs md:text-sm text-gray-600"
			>
				{label}
			</label>
			<input
				{...props}
				{...formik.getFieldProps(props.name)}
				className="rounded-lg py-2 px-3 text-xs md:text-sm text-gray-600 focus:border-purple-400  bg-gray-50 border border-gray-100"
			/>
			{formik.touched[props.name] && formik.errors[props.name] ? (
				<div className="text-xs md:text-sm text-red-500 px-2 whitespace-pre-wrap">
					{formik.errors[props.name]}
				</div>
			) : null}
		</div>
	);
};

export default Input;
