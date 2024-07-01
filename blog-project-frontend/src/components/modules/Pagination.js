import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import { useState } from "react";
import pushRouter from "src/utils/pushRouter";

const PaginationPage = ({ totalPages, page, handleChange }) => {
	return (
		<div
			className="flex items-center justify-center col-span-6 mt-8 md:mt-4 xl:-mt-40"
			dir="ltr"
		>
			<Pagination
				count={totalPages}
				page={page}
				onChange={handleChange}
				color="secondary"
				variant="outlined"
			/>
		</div>
	);
};

export default PaginationPage;
