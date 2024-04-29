"use client"

export default function Table({cols}: {cols: string[]}) {
	return (
		<section className="flex flex-col">
			<table className="mt-4 text-left table-auto border-collapse text-sm">
				<thead className="border-b border-gray-300 sticky top-0 bg-white/75 backdrop-blur ">
					<tr>
						{cols.map((col) => (
							<th key={col} className="px-6 py-4 font-medium text-gray-800">
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{[...new Array(20)].map((_, key) => (
						<tr className="[&>td]:px-6 [&>td]:py-4 border-b" key={key}>
							<td className="font-medium">Jane Doe</td>
							<td>janedoe@shcp.edu</td>
							<td>5</td>
							<td>Yes</td>
							<td className="font-medium text-green-700 hover:underline cursor-pointer">
								Edit
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
