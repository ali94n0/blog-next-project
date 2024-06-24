import Interaction from "@/components/modules/Interactions";
import http from "@/services/httpService";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toPersionNumber } from "src/utils/toPersionNumber";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const postDetailsPage = ({ postData }) => {
	const postCreatedDate = new Date(postData.createdAt).toLocaleDateString(
		"fa-ir",
	);
	console.log(postCreatedDate);
	return (
		<div className="container max-w-screen-sm  md:max-w-screen-lg mx-auto">
			<div className="px-2 md:px-4">
				<header className="flex items-center justify-between p-2  mb-12">
					{/* post info */}
					<div className="flex items-center gap-x-2 md:gap-x-6">
						<div className="rounded-full border-2 border-purple-300 overflow-hidden">
							<img
								src="/images/userImg.png"
								className="w-12 h-12 md:w-24 md:h-24"
							/>
						</div>
						<div className="flex flex-col justify-center gap-y-2">
							<div className="flex items-center gap-x-4">
								<span className="text-md text-gray-600">
									{postData.author.name}
								</span>
								<Link href={`/blogs/${postData.category.englishTitle}`}>
									<a className="py-1 px-2 rounded-2xl text-xs bg-blue-100 text-blue-500 hover:text-blue-100 hover:bg-blue-500 cursor-pointer transition-all duration-200 ease-in">
										{postData.category.title}
									</a>
								</Link>
							</div>
							<span className="text-xs text-gray-400">
								{postData.author.biography}
							</span>
							<span className="text-xs md:text-sm text-gray-400">{`${postCreatedDate} • خواندن ${toPersionNumber(
								postData.readingTime,
							)} دقیقه`}</span>
						</div>
					</div>
					{/* post actions */}
					<div className="flex items-start gap-x-2 md:gap-x-4">
						<span className="cursor-pointer flex items-center py-1">
							<LinkIcon className="w-4 h-4 md:w-6 md:h-6 stroke-gray-400 stroke-2 hover:stroke-gray-500" />
						</span>
						<span className="text-xs md:text-sm cursor-pointer text-gray-400 flex items-center gap-x-1 md:gap-x-2 border border-gray-400 p-1 md:px-2 md:py-1 rounded-2xl hover:border-gray-500 hover:text-gray-500 ">
							ذخیره
							<BookmarkIcon className="w-4 h-4 md:w-6 md:h-6 stroke-gray-400 stroke-2 hover:stroke-gray-500" />
						</span>
					</div>
				</header>
				<main className="flex flex-col px-4">
					<article className="prose md:prose-lg prose-slate prose-p:text-slate-600 prose-p:leading-8 prose-p:text-md md:prose-p:text-base prose-a:text-blue-700 prose-img:rounded-lg prose-code:text-slate-400 prose-pre:text-yellow-300 prose-pre:bg-slate-700 prose-h1:font-black prose-h1:text-3xl prose-h2:font-bold prose-h2:text-2xl px-2 md:px-4 mb-8 mx-auto">
						<h1>{postData.title}</h1>
						<h2>عنوان اول تستی</h2>
						<p>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
							استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
							در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
							نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
							کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
							جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
							طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
							فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
							موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
							نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
							دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
						</p>
						<img
							src={postData.coverImage}
							alt={postData.title}
						/>
						<h2>عنوان تستی دوم </h2>
						<p>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
							استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
							در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
							نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
							کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
							جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
							طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
							فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
							موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
							نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
							دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
						</p>
						<h2>نحوه کانفیگ تیلویند</h2>
						<p>
							بدون استفاده از{" "}
							<a href="https://highlightjs.org/">highlight.js</a> میتوان به
							سادگی کدها را داخل محتوای بلاگ ها قرار داد!
						</p>
						<p>
							به عنوان مثال، برای کانفیگ تیلویند باید از فایل{" "}
							<code>tailwind.config.js</code> استفاده کرد:
						</p>
						<pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
					</article>
					{/* post tags like-bookmark */}
					<section>
						<ul className="flex items-center gap-2 mb-8 px-2 md:px-4 flex-wrap">
							{["ریکت", "جاوااسکریپت", "فرانت اند", "Next.js"].map(
								(tag, index) => {
									return (
										<li
											key={index}
											className="bg-gray-200 text-gray-400 px-2 py-1 rounded-full cursor-pointer text-sm hover:bg-gray-100 whitespace-nowrap"
										>
											{tag}
										</li>
									);
								},
							)}
						</ul>
						{/* intraction buttons */}
						<div className="mb-8 px-2 md:px-4 flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between">
							<Interaction
								isSmall={false}
								post={postData}
							/>
							<div className="flex items-center text-gray-400 gap-x-4 md:gap-x-4">
								<a
									href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/post/${postData.hashId}/${postData.slug}&text=${postData.title}`}
								>
									<FaTelegram className="w-8 h-8 fill-current cursor-pointer" />
								</a>
								<a
									href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/post/${postData.hashId}/${postData.slug}&text=${postData.title}`}
								>
									<FaTwitter className="w-8 h-8 fill-current cursor-pointer" />
								</a>
								<a
									href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/post/${postData.hashId}/${postData.slug}`}
								>
									<FaLinkedin className="w-8 h-8 fill-current cursor-pointer" />
								</a>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default postDetailsPage;

export async function getServerSideProps({ params }) {
	const { data } = await http.get(`/posts/${params.postSlug}`);

	return {
		props: {
			postData: data.data,
		},
	};
}
