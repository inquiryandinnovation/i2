"use client";

import { GetDataReturn, getData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Table({ cols, table }: { cols: TableCol[]; table?: string }) {
	const [data, setData] = useState<GetDataReturn[]>();
	const colsData = [
		...new Set(cols.filter((item) => !item.profiles).map((item) => item.col)),
	].join(", ");
	const hasProfiles = cols.some((col) => col.profiles);

	useEffect(() => {
		(async () => {
			if (table) {
				const data = await getData(
					table,
					colsData +
						", id" +
						(hasProfiles ? ", profiles (full_name, avatar_url, slug)" : "")
				);
				setData(data || undefined);
			}
		})();
	}, []);

	return (
		<section className="flex flex-col">
			{data ? (
				<table className="mt-4 table-auto border-collapse text-left text-sm">
					<thead className="sticky top-0 border-b border-gray-300 bg-white/75 backdrop-blur ">
						<tr>
							{cols.map((col) => (
								<th
									key={col.col}
									className={`px-6 py-4 font-medium text-gray-800`}
								>
									{col.name}
								</th>
							))}
						</tr>
					</thead>
					{/* this doesn't properly parse foreign tables yet */}
					<tbody>
						{data.map((row) => {
							return (
								<tr
									className="overflow-visible border-b [&>td]:px-6 [&>td]:py-4"
									key={row.id}
								>
									{cols.map((col, i) => (
										<td
											className={`overflow-visible" max-w-36 truncate ${i === 0 ? "font-medium text-gray-900" : "text-gray-800"}`}
										>
											{col.profiles ? (
												<div className="group/profiles flex gap-1.5">
													{(row.profiles as unknown as any[])
														.sort((a, b) =>
															a.name > b.name ? 1 : b.name > a.name ? -1 : 0
														)
														.map((profile, i) => (
															<Link
																className="group/profile relative flex flex-col items-center"
																key={profile.name}
																style={{
																	zIndex: 100 - i,
																}}
																href={`/students/${profile.slug}`}
															>
																<Image
																	src={profile.avatar_url}
																	alt={`${profile.name}'s Avatar`}
																	className={`size-6 rounded-full object-cover shadow transition group-hover/profiles:!translate-y-0`}
																	width={75}
																	height={75}
																	quality={95}
																	style={{
																		transform: `translate(-${i * 0.75}rem)`,
																	}}
																/>
																<div className="absolute bottom-6 hidden rounded-md border bg-white px-2 text-xs font-medium shadow-md group-hover/profile:block">
																	{profile.full_name.split(" ")[0]}
																</div>
															</Link>
														))}
												</div>
											) : (
												row[col.col!]
											)}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p>loading</p>
			)}
		</section>
	);
}

export interface TableCol {
	name: string;
	col?: string;
	profiles?: true;
}
