import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link href={`/posts/${slug}`} legacyBehavior>
      <a className="select-none w-full h-full vstack gap-3 cursor-pointer focus:outline-2">
        <div className="w-full aspect-[16/9] bg-neutral-50 overflow-hidden">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="vstack gap-2 bg-primary-1">
          <Date date={date} />
          <h3 className="text-primary-1 text-lg font-bold leading-relaxed line-clamp-2">
            {title}
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 font-normal text-sm leading-7 line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
