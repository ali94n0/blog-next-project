import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { wrapper } from "src/reduxToolkit/store";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Toaster />
			<Component {...pageProps} />
		</Layout>
	);
};

export default wrapper.withRedux(MyApp);
