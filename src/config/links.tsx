import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
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
    icon: <GoHome />,
    isExternal: true,
  },
];
