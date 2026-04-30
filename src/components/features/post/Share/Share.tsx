import {
  ThreadsIcon,
  ThreadsShareButton,
  LineIcon,
  LineShareButton,
  HatenaIcon,
  HatenaShareButton,
  XShareButton,
  XIcon,
  BlueskyShareButton,
  BlueskyIcon,
} from 'react-share';
import { MdShare } from 'react-icons/md';
import { ROOT_URL, SITE_NAME } from '@/config/app';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

const SIZE = 40;

export const Share: React.VFC<Props> = ({ post }) => {
  const { title, slug } = post;

  const url = `${ROOT_URL}/posts/${slug}`;
  const config = { title, url };

  const tags = post.tags.map((tag) => tag.split(' ')[0]);

  return (
    <div className="select-none vstack gap-3 p-6 bg-primary-1">
      <div className="center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase">
        <MdShare />
        share
      </div>

      <div className="w-full center gap-4">
        <LineShareButton {...config}>
          <LineIcon size={SIZE} round />
        </LineShareButton>
        <XShareButton
          title={title}
          url={url}
          via={SITE_NAME}
          related={[SITE_NAME, 'Next.js']}
          hashtags={tags}
        >
          <XIcon size={SIZE} round />
        </XShareButton>
        <HatenaShareButton {...config}>
          <HatenaIcon size={SIZE} round />
        </HatenaShareButton>
        <ThreadsShareButton {...config}>
          <ThreadsIcon size={SIZE} round />
        </ThreadsShareButton>
        <BlueskyShareButton {...config}>
          <BlueskyIcon size={SIZE} round />
        </BlueskyShareButton>
      </div>
    </div>
  );
};
