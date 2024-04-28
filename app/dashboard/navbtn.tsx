"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavButtons = ({
  pages,
  root,
}: {
  pages: Page[];
  root: string;
}) => {
  const pathname = usePathname();
  const [slug, setSlug] = useState(pathname.replace(root, ""));

  return (
    <ul className="flex flex-col gap-2">
      {pages.map((page) => {
        const selected = slug === page.slug;
        return (
          <li key={page.slug}>
            <Link
              href={root + page.slug}
              className={`p-2 flex items-center font-medium rounded-md transition group ${
                selected ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`${
                  selected
                    ? "text-green-700"
                    : "text-gray-400 group-hover:text-green-700"
                } mr-4 [&>svg]:size-6`}
              >
                {page.icon}
              </div>
              <p
                className={`${
                  selected && "text-green-700"
                } group-hover:text-green-700 mr-4 transition`}
              >
                {page.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export interface Page {
  name: string;
  slug: string;
  icon: JSX.Element;
}
