import http from "@/services/httpService";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toPersionNumber } from "src/utils/toPersionNumber";

const postDetailsPage = ({ postData }) => {
	const postCreatedDate = new Date(postData.createdAt).toLocaleDateString(
		"fa-ir",
	);
	console.log(postCreatedDate);
	return (
		<div>
			<div className="flex items-center justify-between p-2  mb-12">
				{/* post details */}
				<div className="flex items-center gap-x-6">
					<div className="rounded-full border-2 border-purple-300 overflow-hidden">
						<img
							src="/images/userImg.png"
							className="w-24 h-24"
						/>
					</div>
					<div className="flex flex-col justify-center gap-y-2">
						<div className="flex items-center gap-x-4">
							<span className="text-md text-gray-600">
								{postData.author.name}
							</span>
							<Link href={`/blogs/${postData.category.englishTitle}`}>
								<a className="py-1 px-2 rounded-2xl text-xs bg-blue-100 text-blue-500 hover:text-blue-100 hover:bg-blue-500 cursor-pointer transition-all duration-200 ease-in">
									{postData.category.title}
								</a>
							</Link>
						</div>
						<span className="text-xs text-gray-400">
							{postData.author.biography}
						</span>
						<span className="text-sm text-gray-400">{`${postCreatedDate} • خواندن ${toPersionNumber(
							postData.readingTime,
						)} دقیقه`}</span>
					</div>
				</div>
				{/* post actions */}
				<div className="flex items-start gap-x-4">
					<span className="cursor-pointer flex items-center py-1">
						<LinkIcon className="w-6 h-6 stroke-gray-400 stroke-2 hover:stroke-gray-500" />
					</span>
					<span className="cursor-pointer text-gray-400 flex items-center gap-x-2 border border-gray-400 py-1 px-2 rounded-2xl hover:border-gray-500 hover:text-gray-500 ">
						ذخیره
						<BookmarkIcon className="w-6 h65 stroke-gray-400 stroke-2 hover:stroke-gray-500" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default postDetailsPage;

export async function getServerSideProps({ params }) {
	const { data } = await http.get(`/posts/${params.postSlug}`);

	return {
		props: {
			postData: data.data,
		},
	};
}
