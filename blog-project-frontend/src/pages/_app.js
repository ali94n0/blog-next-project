import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthContext, { AuthProvider } from "src/contexts/AuthContext";

export default function App({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}
