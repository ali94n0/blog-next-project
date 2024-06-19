import Post from "../post/Post";

const PostsList = ({ posts }) => {
	return (
		<>
			{posts.map((post) => (
				<Post
					key={post._id}
					post={post}
				/>
			))}
		</>
	);
};

export default PostsList;
