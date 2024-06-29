import { ThreeDots } from "react-loader-spinner";

const Loader = ({ height = "40", width = "40" }) => {
	return (
		<ThreeDots
			visible={true}
			height={height}
			width={width}
			color="#7e22ce"
			radius="9"
			ariaLabel="three-dots-loading"
			wrapperClass="flex justify-center items-center mt-2 "
		/>
	);
};

export default Loader;
