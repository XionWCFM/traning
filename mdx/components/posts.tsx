import Link from 'next/link';
import { type Post } from '@/posts';
export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${slug}`}>{title}</Link>
          </h2>
          <p className=" cursor-pointer">
            <Link href={`/${slug}`}>
              <strong>Published:</strong>{' '}
              {new Date(publishDate).toLocaleDateString()}{' '}
              <strong>Categories:</strong>{' '}
              {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
            </Link>
          </p>
        </li>
      ))}
    </ol>
  );
}
