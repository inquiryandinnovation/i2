"use client";

import { getData } from "@/lib/projects";
import { useEffect, useState } from "react";

export default function Table({
	cols,
	table,
}: {
	cols: { name: string; col: string }[];
	table?: string;
}) {
	const [data, setData] = useState<unknown[]>();
	const colsData = [...new Set(cols.map((item) => item.col))].join(", ");

	useEffect(() => {
		(async () => {
			if (table) {
				const data = await getData(table, colsData + ", id");
				console.log(data);

				setData(data || undefined);
			}
		})();
	}, []);

	return (
		<section className="flex flex-col">
			{data ? (
				<table className="mt-4 text-left table-auto border-collapse text-sm">
					<thead className="border-b border-gray-300 sticky top-0 bg-white/75 backdrop-blur ">
						<tr>
							{cols.map((col) => (
								<th
									key={col.col}
									className="px-6 py-4 font-medium text-gray-800"
								>
									{col.name}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{data.map((row) => (
							// @ts-expect-error
							<tr className="[&>td]:px-6 [&>td]:py-4 border-b" key={row.id}>
								{cols.map((col) => (
									<td className="font-medium max-w-36 truncate">
										{/* @ts-expect-error */}
										{row[col.col]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>loading</p>
			)}
		</section>
	);
}
