import metadataJson from "@/lib/metadata.json";

const DEFAULT_META = {
  title: "KGK Group - Inspired to Shine",
  description: "Discover KGK Group: Global leaders in gems, jewellery, and more.",
  keywords: "KGK Group, gems, jewellery, global business",
  noindex: false,
  nofollow: false,
};

export function getMetadata(pathname = "/") {
  const pageMeta = metadataJson[pathname] || DEFAULT_META;

  const noindex =
    process.env.NEXT_PUBLIC_NOINDEX === "true"
      ? true
      : pageMeta.noindex ?? false;

  const nofollow =
    process.env.NEXT_PUBLIC_NOFOLLOW === "true"
      ? true
      : pageMeta.nofollow ?? false;

  const canonical =
    pageMeta.canonical ||
    `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords || DEFAULT_META.keywords,
    alternates: { canonical },
    robots: { index: !noindex, follow: !nofollow },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      other: [
        { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
        { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
      ],
    },
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      url: canonical,
      siteName: "KGK Group",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      images: ["https://kgk-group-new.vercel.app/og-image.jpg"],
      creator: "@kgk_group",
    },
  };
}
