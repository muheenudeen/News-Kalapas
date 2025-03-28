/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "platform.theverge.com",
      "gizmodo.com",
      "cdn.mos.cms.futurecdn.net",
      "www.theverge.com",
      "images.macrumors.com",
      "www.cnet.com",
      "hbr.org",
      "i0.wp.com",
      "imgs.hipertextual.com",
      "media.newyorker.com",
      "i.blogs.es",
      "www.apple.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images
      },
    ],
  },
};

export default nextConfig;
