import Post from "@/components/post/Post";
import http from "@/services/httpService";

const Home = ({ posts }) => {
	console.log(posts);
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container max-w-screen-lg mx-auto">
				<main className="px-2 md:px-4">
					<div className="px-4 py-6 sm:px-0">
						<div className="border-2  border-gray-200 rounded-lg  flex items-center justify-center bg-purple-100">
							<p className="text-xl font-medium text-gray-500">
								به وبلاک من خوش امدید
							</p>
						</div>
					</div>

					<div className="mt-2 grid grid-cols-6 gap-4 ">
						{posts.map((post) => (
							<Post
								post={post}
								isRelated={true}
								key={post._id}
							/>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const { data } = await http.get("/posts?limit=3");

	return {
		props: {
			posts: data.data.docs,
		},
	};
}
