import { Posts } from '@/components/posts';
import { getPosts } from '@/posts';
import Image from 'next/image';

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <h1>next.js mdx blog</h1>
      <Posts posts={posts} />
    </main>
  );
}
