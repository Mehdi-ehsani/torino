/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "",
				pathname: "**",
				search: "",
			},
		],
	},
};

export default nextConfig;
