import { Category, categories } from '@/categories';
import { Posts } from '@/components/posts';
import { getPostsByCategory, postsPerPage } from '@/posts';
import { notFound } from 'next/navigation';
import React from 'react';

interface pageProps {
  params: {
    category: Category;
  };
}

const page = async ({ params }: pageProps) => {
  const { category } = params;
  if (categories.indexOf(category) == -1) notFound();
  const posts = await getPostsByCategory({ category });

  return (
    <div>
      <h1>Category : {category}</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const paths = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory({ category });
      const pages = Math.ceil(posts.length / postsPerPage);

      return [...Array(pages)].map((_, i) => ({
        category,
        page: `${i + 1}`,
      }));
    }),
  );

  return paths.flat();
}
