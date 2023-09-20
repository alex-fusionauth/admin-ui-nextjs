'use client';

import ActiveLink from '@/components/ActiveLink';

export default function Aside({
  heading,
  links,
}: {
  heading: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div className="pb-4">
      <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
        {heading}
      </h4>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        {links.map((link, i) => (
          <ActiveLink
            key={i}
            href={link.href}
            className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
            activeClassName="text-foreground"
          >
            {link.name}
          </ActiveLink>
        ))}
      </div>
    </div>
  );
}
