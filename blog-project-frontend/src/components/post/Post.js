import {
	BookmarkIcon,
	ChatBubbleBottomCenterTextIcon,
	ClockIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { toPersionNumber } from "src/utils/toPersionNumber";

const Post = ({ post }) => {
	return (
		<div className="flex flex-col bg-white col-span-6 md:col-span-3 lg:col-span-2 rounded-xl p-2 max-h-[500px] md:max-h-[350px]">
			{/* post image */}
			<div className=" aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-4">
				<Link href={`/posts/${post.hashId}/${post.slug}`}>
					<a>
						<img
							src={post.coverImage}
							className="w-full h-full object-cover object-center "
						/>
					</a>
				</Link>
			</div>
			{/* post details */}
			<div className="bg-gray-50 rounded-xl p-2 flex flex-col justify-between flex-1">
				<Link href={`/posts/${post.hashId}/${post.slug}`}>
					<a>
						<h2 className="mb-4 text-xl font-bold text-gray-900 py-2">
							{post.title}
						</h2>
					</a>
				</Link>
				<div>
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-x-2">
							<img
								src="/images/userImg.png"
								className="rounded-full w-6 h-6 border-2 border-purple-300"
							/>
							<span className="text-xxs text-gray-500">{post.author.name}</span>
						</div>
						<Link href={`/blogs/${post.category.englishTitle}`}>
							<a className="py-1 px-2 rounded-2xl text-xxxs bg-blue-100 text-blue-500 hover:text-blue-100 hover:bg-blue-500 cursor-pointer transition-all duration-200 ease-in">
								{post.category.title}
							</a>
						</Link>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-x-1">
							<span className="bg-gray-200 text-gray-400 text-xxxs px-1 py-0.5 rounded-md flex items-center justify-between cursor-pointer">
								<ChatBubbleBottomCenterTextIcon className="w-3 h-3 stroke-gray-400" />
								{post.commentsCount}
							</span>
							<span className="bg-red-200 text-red-400 text-xxxs px-1 py-0.5 rounded-md flex items-center justify-between cursor-pointer">
								<HeartIcon className="w-3 h-3 stroke-red-400" />
								<span>{post.likesCount}</span>
							</span>
							<span className="bg-blue-200 text-blue-400 text-xxxs px-1 py-0.5 rounded-md flex items-center justify-between cursor-pointer">
								<BookmarkIcon className="w-3 h-3 stroke-blue-400" />
								{post.likesCount}
							</span>
						</div>
						<span className="text-gray-400 text-xxxs flex items-center whitespace-nowrap gap-x-1 ">
							<ClockIcon className="w-3 h-3 stroke-gray-400" />
							{`زمان مطالعه: ${toPersionNumber(post.readingTime)} دقیقه`}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
