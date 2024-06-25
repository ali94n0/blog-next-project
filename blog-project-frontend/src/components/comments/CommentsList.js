import React from "react";

import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";

const CommentsList = ({ postData }) => {
	return (
		<React.Fragment>
			{postData.comments.map((comment, index) => {
				return (
					!comment.responseTo &&
					comment.status === 2 && (
						<SingleComment
							key={index}
							comment={comment}
							comments={postData.comments}
						/>
					)
				);
			})}
			<CommentForm isInComment={false} />
		</React.Fragment>
	);
};

export default CommentsList;
