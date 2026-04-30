import { PostType } from '@/types/post';
import { Story } from './Story';

type Props = {
  posts: PostType[];
  icon?: React.ReactElement;
  title: React.ReactNode;
};

export const Stories = ({ posts, icon, title }: Props) => {
  return (
    <section>
      <div className="vstack gap-8">
        <h2 className="hstack gap-2 text-primary-1 text-3xl font-medium tracking-tight leading-tight">
          {icon} {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-14">
          {posts.map((post) => (
            <Story
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
