"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavButtons = ({
  pages,
  root,
}: {
  pages: Page[];
  root: string;
}) => {
	const pathname = usePathname()
  const [slug, setSlug] = useState(pages[0].slug);

  return (
    <>
      {pages.map((page) => (
        <a href={root + page.slug} key={page.slug}>
          {page.icon}
        </a>
      ))}
    </>
  );
};

export interface Page {
  name: string;
  slug: string;
  icon: JSX.Element;
}
