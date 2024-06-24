import {
	HeartIcon as SolidHeart,
	BookmarkIcon as SolidBookmark,
} from "@heroicons/react/24/solid";
import {
	BookmarkIcon,
	ChatBubbleBottomCenterTextIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

const Interaction = ({ post, isSmall }) => {
	const iconSize = `${isSmall ? "w-3 h-3" : "w-5 h-5"}`;
	const spanSize = `${isSmall ? "px-1 py-0.5 text-xxxs" : "px-2 py-1 text-xs"}`;
	return (
		<div className={`flex items-center  ${isSmall ? "gap-x-1" : "gap-x-4"}`}>
			<span
				className={`bg-gray-200 text-gray-400   rounded-md flex items-center justify-between cursor-pointer ${spanSize} `}
			>
				<ChatBubbleBottomCenterTextIcon
					className={` ${iconSize} stroke-gray-400`}
				/>
				{post.commentsCount}
			</span>
			<span
				className={`bg-red-100 text-red-400 hover:text-red-100 hover:bg-red-400   rounded-md flex items-center justify-between cursor-pointer ${spanSize} `}
			>
				{post.isLiked ? (
					<SolidHeart className={` ${iconSize} fill-current`} />
				) : (
					<HeartIcon className={` ${iconSize} stroke-current`} />
				)}
				<span>{post.likesCount}</span>
			</span>
			<span
				className={`bg-blue-100 text-blue-400 hover:text-blue-100 hover:bg-blue-400   rounded-md flex items-center justify-between cursor-pointer ${spanSize} `}
			>
				{post.isBookmarked ? (
					<SolidBookmark className={` ${iconSize} fill-current`} />
				) : (
					<BookmarkIcon className={` ${iconSize} stroke-current`} />
				)}

				{post.likesCount}
			</span>
		</div>
	);
};

export default Interaction;
