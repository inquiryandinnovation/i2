"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavButtons = ({
	pages,
	root,
}: {
	pages: Page[];
	root: string;
}) => {
	const pathname = usePathname();

	return (
		<ul className="flex flex-col gap-2">
			{pages.map((page) => {
				// this won't work with a querystring
				const selected = page.slug === pathname.replace(root, "")

				return (
					<li key={page.slug}>
						<Link
							href={root + page.slug}
							className={`group flex items-center rounded-md p-2 font-medium transition ${
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
								} mr-4 transition group-hover:text-green-700`}
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
