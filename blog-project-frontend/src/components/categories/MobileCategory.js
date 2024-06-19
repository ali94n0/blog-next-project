import Link from "next/link";

const MobileCategory = ({ categories }) => {
	return (
		<div className=" col-span-12 flex items-center py-4 md:hidden gap-x-2 overflow-scroll ">
			<Link
				href={"/blogs"}
				className=""
			>
				<a className=" text-xs py-0.5 px-1 rounded-2xl bg-white border border-gray-400 text-gray-400  focus:text-blue-400 focus:border-blue-400 whitespace-nowrap cursor-pointer">
					همه
				</a>
			</Link>
			{categories.map((category) => {
				return (
					<Link
						href={`/blogs/${category.englishTitle}`}
						key={category._id}
						className="bg-red-200"
					>
						<a className=" text-xs bg-white py-1 px-2 rounded-2xl border border-gray-400 text-gray-400 focus:text-blue-400 focus:border-blue-400 whitespace-nowrap cursor-pointer">
							{category.title}
						</a>
					</Link>
				);
			})}
		</div>
	);
};

export default MobileCategory;
