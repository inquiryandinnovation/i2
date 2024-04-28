import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Page() {
	const cols = ["Name", "Email", "Blogs", "Complete Profile", ""];

	return (
		<>
			{/* Header */}
			<section className="flex justify-between items-center p-6">
				<div className="">
					<h1 className="font-medium text-lg">Students</h1>
					<p className="text-sm mt-2">
						A list of all the students in i2 including their name, , email and
						role.
					</p>
				</div>
				<div className="flex gap-2">
					<button className="rounded-md bg-gray-100 px-1.5">
						<EllipsisVerticalIcon className="size-6" />
					</button>
					<button className="rounded-md text-white bg-green-700 px-3 py-2 font-medium text-sm">
						Add student
					</button>
				</div>
			</section>
			{/* Table */}
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
			{/* Navigation */}
			<section></section>
		</>
	);
}
