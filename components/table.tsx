"use client";

import { GetDataReturn, getData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Some future stuff to work on:
// - ability to search
// - tags that look better with a number counter
// - pagination
// - foreign table fetching

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

	// Profile images thing that expands on hover
	const Profiles = ({ row }: { row: GetDataReturn }) => (
		<div className="group/profiles flex gap-1.5">
			{(row.profiles as unknown as any[])
				.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
				.map((profile, i) => (
					<Link
						className="group/profile relative flex flex-col items-center"
						key={profile.full_name + row.id}
						style={{
							zIndex: 100 - i,
						}}
						href={`/students/${profile.slug}`}
					>
						<Image
							src={profile.avatar_url}
							alt={`${profile.full_name}'s Avatar`}
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
	);

	// Represents each individual cell
	const TableCell = ({ col, row }: { row: GetDataReturn; col: TableCol }) => {
		return (
			col.displayText ||
			(col.profiles ? (
				<Profiles row={row} />
			) : col.count && row[col.col!] ? (
				row[col.col!].length
			) : (
				row[col.col!]
			))
		);
	};

	const replaceLinkValues = (link: string, rowData: GetDataReturn) => {
		if (!data) return;
		// split link to get the value to get from the fetch call
		const path = link
			.split(/(\[.+?\])/)
			.filter(Boolean)
			.map((part) => part.replace(/^\[|\]$/g, ""));

		path[1] = rowData[path[1]];

		return path.join("");
	};

	const Loading = () => {
		const rows = 5;
		const loadingArray = Array.from({ length: rows }, () =>
			Array.from(
				{ length: cols.length }
			)
		);

		return (
			<table className="mt-4 table-auto border-collapse text-left text-sm">
				<thead className="sticky top-0 border-b border-gray-300 bg-white/75 backdrop-blur ">
					<tr>
						{cols.map((col) => (
							<th
								key={col.name+"loading"}
								className={`px-6 py-4 font-medium text-gray-800`}
							>
								<p className="w-min animate-pulse rounded bg-gray-100 text-transparent">
									{col.name}
								</p>
							</th>
						))}
					</tr>
				</thead>
				{/* this doesn't properly parse foreign tables yet */}
				<tbody>
					{loadingArray.map((item, i) => {
						return (
							<tr
								className="h-14 overflow-visible border-b [&>td]:px-6 [&>td]:py-4"
								key={i+"loading"}
							>
								{item.map((_, i2) => (
									<td className={`overflow-visible" max-w-36 truncate`} key={i+i2}>
										<div
											className=" animate-pulse rounded bg-gray-100 text-transparent w-28"
										>
											t
										</div>
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};

	return (
		<section className="flex flex-col">
			{data ? (
				<table className="mt-4 table-auto border-collapse text-left text-sm">
					<thead className="sticky top-0 border-b border-gray-300 bg-white/75 backdrop-blur ">
						<tr>
							{cols.map((col) => (
								<th
									key={col.name}
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
									className="h-14 overflow-visible border-b [&>td]:px-6 [&>td]:py-4"
									key={row.id}
								>
									{cols.map((col) => (
										<td
											className={`overflow-visible" max-w-36 truncate ${col.className}`}
											key={col.col + row.id}
										>
											{col.link ? (
												<Link href={replaceLinkValues(col.link, row) || ""}>
													<TableCell col={col} row={row} />
												</Link>
											) : (
												<TableCell col={col} row={row} />
											)}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<Loading />
			)}
		</section>
	);
}

export interface TableCol {
	// name of column on dashboard
	name: string;
	// what column to fetch from the DB
	col?: string;
	// row that will try to fetch profiles connected via foreign key
	profiles?: true;
	// display the count of the thing (client side)
	count?: boolean;
	// add a classname to the column
	className?: string;
	// display text instead of a value
	displayText?: string;
	// for links, the table will replace anything inside of brackets with the value as long as it was requested
	link?: string;
}
