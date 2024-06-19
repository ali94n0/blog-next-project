import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({ categories, selectedCategory = "" }) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(true);

	return (
		<div className="bg-white rounded-xl overflow-hidden">
			{/* filter category header */}
			<div
				className="flex items-center justify-between px-2 py-3 bg-purple-200 text-lg text-purple-800 cursor-pointer"
				onClick={() => setIsCategoryOpen(!isCategoryOpen)}
			>
				<span>دسته‌بندی مقالات</span>
				<ChevronDownIcon
					className={`w-6 h-6 stroke-purple-800 transition-all ease-in-out duration-300 ${
						isCategoryOpen ? "rotate-180" : "rotate-0"
					}`}
				/>
			</div>
			{/* filter category body */}
			<div
				className={`flex flex-col text-gray-600 ${
					isCategoryOpen ? "" : "hidden"
				}`}
			>
				<Link href={"/blogs"}>
					<a
						className={`p-3 hover:bg-purple-50 cursor-pointer transition-all duration-200 ease-in ${
							selectedCategory === "" ? "bg-purple-50" : ""
						} `}
					>
						همه مقالات
					</a>
				</Link>
				{categories.map((category) => {
					return (
						<Link
							href={`/blogs/${category.englishTitle}`}
							key={category._id}
						>
							<a
								className={`p-3 hover:bg-purple-50 cursor-pointer transition-all duration-200 ease-in ${
									selectedCategory === category.englishTitle
										? "bg-purple-50"
										: ""
								} `}
							>
								{category.title}
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default DesktopCategory;
