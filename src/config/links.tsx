import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag, FiExternalLink } from 'react-icons/fi';
import { MdOutlineArticle } from 'react-icons/md';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  {
    name: 'Articles',
    href: '/',
    icon: <MdOutlineArticle />,
  },
  {
    name: 'tags',
    href: '/tags',
    icon: <FiTag />,
  },
  {
    name: 'about',
    href: '/about',
    icon: <AiOutlineInfoCircle />,
  },
  {
    name: 'ZAGARO-HP',
    href: 'https://uos-zagaro-eng.github.io/zagaro-hp/',
    icon: <FiExternalLink />,
    isExternal: true,
  },
];
