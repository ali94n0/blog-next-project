import { UserIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import CommentForm from "./CommentForm";
import toPersionDate from "src/utils/toPersionDate";
import ReplyComments from "./ReplyComments";

const SingleComment = ({ comment, comments }) => {
	const [isReply, setIsReply] = useState(false);
	// console.log(comments, "single");
	return (
		<React.Fragment>
			<div className="flex flex-col p-2 rounded-xl border border-gray-200 bg-white mb-4">
				{/* header of comment */}
				<div className="flex items-center gap-x-2 md:gap-x-4">
					<div className="flex rounded-full bg-gray-50 text-gray-300 p-1 justify-center items-center">
						<UserIcon className="w-8 h-8 md:w-12 md:h-12 fill-current" />
					</div>
					<div className="flex flex-col justify-center">
						<span className="text-sm text-gray-500">
							{comment.writer?.name}
						</span>
						<span className="text-xxs text-gray-400">
							{toPersionDate(comment.createdAt)}
						</span>
					</div>
				</div>
				{/* content of comment */}
				<div className=" px-2 md:px-4 py-4">
					<p className="text-sm md:text-base text-gray-600 mb-6">
						{comment.content}
					</p>

					{isReply ? (
						<CommentForm
							setIsReply={setIsReply}
							isInComment={true}
						/>
					) : (
						<button
							className="bg-blue-50 text-blue-500 rounded-2xl px-2 py-1 text-sm "
							onClick={() => setIsReply(true)}
						>{`پاسخ به ${comment.writer?.name}`}</button>
					)}
				</div>
			</div>
			<ReplyComments
				comments={comments}
				commentId={comment._id}
			/>
		</React.Fragment>
	);
};

export default SingleComment;
