import { Table, TableCol } from "@/components/table";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Page() {
	const cols: TableCol[] = [
		{ name: "Name", col: "name" },
		{ name: "Summary", col: "summary" },
		{ name: "Team", profiles: true },
		{ name: "Name", col: "name" },
		{ name: "", col: "name" },
	];

	return (
		<>
			{/* Header */}
			<section className="flex items-center justify-between p-6">
				<div className="">
					<h1 className="text-lg font-medium">Projects</h1>
					<p className="mt-2 text-sm">
						A list of all the projects in i2 including their name, , email and
						role.
					</p>
				</div>
				<div className="flex gap-2">
					<button className="rounded-md bg-gray-100 px-1.5">
						<EllipsisVerticalIcon className="size-6" />
					</button>
					<button className="rounded-md bg-green-700 px-3 py-2 text-sm font-medium text-white">
						Add student
					</button>
				</div>
			</section>
			{/* Table */}
			<Table cols={cols} table="projects" />
			{/* Navigation */}
			<section></section>
		</>
	);
}
