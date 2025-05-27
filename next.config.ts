import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
    ]
  }
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
