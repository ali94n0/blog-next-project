import SingleComment from "./SingleComment";

const ReplyComments = ({ comments, commentId, post }) => {
	return comments.map((comment) => {
		return (
			comment.responseTo === commentId && (
				<div className="pr-6 -mt-2">
					<SingleComment
						comment={comment}
						comments={comments}
						responseTo={commentId}
						post={post}
					/>
				</div>
			)
		);
	});
};

export default ReplyComments;
