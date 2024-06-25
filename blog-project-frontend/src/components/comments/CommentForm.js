import { useState } from "react";

const CommentForm = ({ setIsReply, isInComment }) => {
	const [commentValue, setCommentValue] = useState("");
	return (
		<form className={`flex flex-col gap-y-2 ${isInComment ? "" : "py-8"}`}>
			{!isInComment && (
				<h3 className="text-lg font-bold text-gray-800">
					دیدگاه خودتان بنویسید:
				</h3>
			)}
			<textarea
				className={` text-gray-600 text-sm h-20 rounded-2xl py-2 px-4 border border-gray-100 ${
					isInComment ? "bg-gray-50" : "bg-white"
				}`}
				value={commentValue}
				onChange={(e) => setCommentValue(e.target.value)}
			></textarea>
			<div
				className={`${
					isInComment ? "justify-between" : "justify-center"
				} flex items-center  gap-x-4`}
			>
				<button
					className={`${
						isInComment ? "flex-1" : "w-[40%]"
					} py-1 px-2 bg-purple-300 hover:bg-purple-200 text-purple-700 rounded-xl`}
				>
					ارسال
				</button>
				{isInComment ? (
					<button
						className="flex-1 py-1 px-2 text-red-300 hover:text-red-500 border border-red-300 hover:border-red-500 rounded-xl"
						onClick={() => setIsReply(false)}
					>
						لغو
					</button>
				) : null}
			</div>
		</form>
	);
};

export default CommentForm;
