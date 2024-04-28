"use client";

import { useState } from "react";

export const NavButtons = ({
  pages,
  root,
}: {
  pages: Page[];
  root: string;
}) => {
  const url = window.location.pathname;
  const [slug, setSlug] = useState(pages[0].slug);

  return (
    <>
      {pages.map((page) => (
        <a href="" key={page.slug}>
          <page.icon />
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
