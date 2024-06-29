import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex items-center justify-center py-2 bg-gray-50 mt-8">
			<p className="text-sm md:text-base font-light">
				ساخته شده توسط
				<Link href="https://github.com/ali94n0">
					<a className="text-purple-600 cursor-pointer">&nbsp;ali94n0</a>
				</Link>{" "}
				با 💜
			</p>
		</div>
	);
};

export default Footer;
