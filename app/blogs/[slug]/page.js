import { fetchFromAPI } from '@/lib/api';
import BlogDetailContent from '@/components/BlogDetailContent';
import BlogSidebar from '@/components/BlogSidebar';
import Image from 'next/image';
import blog1 from '@/assets/images/blog-details.jpg';

export async function generateStaticParams() {
  try {
    const res = await fetchFromAPI('blogs');

    // Ensure blogs array exists
    const blogs = Array.isArray(res?.blogs) ? res.blogs : [];

    return blogs.map((item) => ({ slug: item.slug }));
  } catch (err) {
    console.error('Error fetching blogs for static params:', err);
    return [];
  }
}

export default async function BlogDetailPage({ params }) {
  const slug = params.slug;

  let data;
  try {
    data = await fetchFromAPI(`blogs/${slug}`);
  } catch (err) {
    console.error('Error fetching blog detail:', err);
    data = null;
  }

  if (!data || !data.blog) {
    return <div className="text-center py-20 text-xl">Blog not found</div>;
  }

  // Ensure image is safe for Next.js Image component
  const blogImage = data.blog.image || blog1;

  return (
    <div className="container">
      <Image
        src={blogImage}
        alt={data.blog.title || 'Blog Image'}
        width={1200}
        height={700}
        className="w-full min-h-96 h-[67vh] object-cover mb-4"
        unoptimized
      />
      <div className="px-0 lg:px-[50px] pt-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-x-32 gap-y-10">
          <div className="md:w-9/12">
            <BlogDetailContent blog={data.blog} />
          </div>
          <div className="md:w-3/12">
            <BlogSidebar
              popularPosts={data.popular_posts || []}
              categories={data.categories || []}
              tags={data.tags || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
