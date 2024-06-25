import Post from "../post/Post";

const PostsList = ({ posts, isRelated }) => {
	return (
		<>
			{posts.map((post) => (
				<Post
					key={post._id}
					post={post}
					isRelated={isRelated}
				/>
			))}
		</>
	);
};

export default PostsList;
