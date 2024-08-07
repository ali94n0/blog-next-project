import React from "react";

import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";

const CommentsList = ({ postData }) => {
	return (
		<React.Fragment>
			{postData.comments.map((comment) => {
				return (
					!comment.responseTo &&
					comment.status === 2 && (
						<SingleComment
							key={comment._id}
							comment={comment}
							comments={postData.comments}
							post={postData}
						/>
					)
				);
			})}
			<CommentForm
				isInComment={false}
				post={postData}
				responseTo={null}
			/>
		</React.Fragment>
	);
};

export default CommentsList;
