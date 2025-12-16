import { fetchFromAPI } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb3';
import FeaturedBlogs from '@/components/FeaturedBlogs';
import LatestBlogs from '@/components/LatestBlogs';

import bgImage from '@/assets/images/banners/blog-banner.jpg';

// ✅ Force server-side dynamic rendering
export const dynamic = 'force-dynamic';

export default async function Blogs() {
  let data;

  try {
    data = await fetchFromAPI('blogs');
  } catch (err) {
    console.error('Failed to fetch blogs:', err);
    data = null;
  }

  const featuredBlog = Array.isArray(data?.featured_blog) ? data.featured_blog : [];
  const blogs = Array.isArray(data?.blogs) ? data.blogs : [];

  return (
    <>
      <Breadcrumb
        heading="Blogs"
        subheading="Trends and stories from ventures"
        bgImage={bgImage}
      />

      {featuredBlog.length > 0 && <FeaturedBlogs data={featuredBlog} />}

      {blogs.length > 0 && <LatestBlogs data={blogs} />}
    </>
  );
}
