import { Link } from '@/components/common/Link';
import { links } from '@/config/links';

export const NavBar = () => {
  return (
    <>
      {links.map(({ name, href, isExternal }) => {
        const className =
          'px-5 py-2 text-primary-1 capitalize select-none cursor-pointer';

        if (isExternal) {
          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {name}
            </a>
          );
        }
        return (
          <Link key={name} href={href} passHref>
            <a className={className}>{name}</a>
          </Link>
        );
      })}
    </>
  );
};
