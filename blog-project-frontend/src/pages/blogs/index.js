import DesktopCategory from "@/components/categories/DesktopCategory";
import MobileCategory from "@/components/categories/MobileCategory";
import PaginationPage from "@/components/modules/Pagination";
import PostsList from "@/components/postsList/PostsList";
import http from "@/services/httpService";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useEffect, useState } from "react";
import pushRouter from "src/utils/pushRouter";

const sortOption = [
	{ label: "جدید ترین", value: "newest" },
	{ label: "پر‌بازدید ترین", value: "most" },
	{ label: "محبوب ترین", value: "popular" },
];

function HomePage({ allPosts, allCategoties }) {
	const router = useRouter();
	const [sort, setSort] = useState(router.query.sort || "newest");

	const handleChange = (e, page) => {
		router.query.page = page;
		pushRouter(router);
	};

	useEffect(() => {
		router.query.sort = sort;
		pushRouter(router);
	}, [sort]);

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto lg:max-w-screen-lg">
				<div className=" grid grid-cols-12 gap-4 grid-rows-[50px_minmax(100vh,_1fr)] px-2 md:px-0">
					{/* filter category section Desktop */}
					<div className="hidden md:block md:col-span-3 row-span-2">
						{/* filter category box for Desktop */}
						<DesktopCategory categories={allCategoties} />
					</div>
					{/* filter category section Mobile */}
					<MobileCategory categories={allCategoties} />
					{/* sort section */}
					<div className="hidden md:block col-span-9 row-span-1">
						{/* sort box */}
						<div className="bg-white px-4 rounded-xl ">
							<div className="flex items-center gap-x-8 text-gray-600">
								<div className="flex items-center gap-x-2">
									<AdjustmentsHorizontalIcon className="w-6 h-6 stroke-gray-700" />
									<span className="text-lg">مرتب سازی:</span>
								</div>
								<ul className="flex items-center gap-x-2">
									{sortOption.map(({ label, value }) => (
										<li
											onClick={() => setSort(value)}
											key={value}
											className={`py-3.5 px-2 cursor-pointer hover:bg-purple-50 hover:border-b-2 hover:border-purple-500 ${
												sort === value ? "border-b-2 border-purple-500" : ""
											} `}
										>
											{label}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					{/* blogs list section */}
					<div className="col-span-12 md:col-span-9 grid grid-cols-6 gap-4 ">
						<PostsList posts={allPosts.docs} />
						{allPosts.totalPages > 1 && (
							<PaginationPage
								page={allPosts.page}
								totalPages={allPosts.totalPages}
								handleChange={handleChange}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;

export async function getServerSideProps({ req, query }) {
	const stringifiedQuery = queryString.stringify(query);
	const { data: posts } = await http.get(`/posts?${stringifiedQuery}`, {
		headers: {
			cookie: req.headers.cookie,
		},
	});
	const { data: categories } = await http.get("/post-category");

	return {
		props: {
			allPosts: posts.data,
			allCategoties: categories.data,
		},
	};
}
