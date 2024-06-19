import Link from "next/link";

const Home = () => {
	return (
		<div>
			<h1>Blog App Next</h1>
			<p>WellCome Home...</p>
			<Link href={"/blogs"}>Go to Blogs Page ?</Link>
		</div>
	);
};

export default Home;
