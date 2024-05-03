import { Table } from "@/components/table";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Page() {
	const cols = ["Name", "Email", "Blogs", "Complete Profile", ""];

	return (
		<>
			{/* Header */}
			<section className="flex items-center justify-between p-6">
				<div className="">
					<h1 className="text-lg font-medium">Students</h1>
					<p className="mt-2 text-sm">
						A list of all the students in i2 including their name, , email and
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
			{/* <Table cols={["Name", "Email", "Blogs", "Complete Profile", ""]} /> */}
			{/* Navigation */}
			<section></section>
		</>
	);
}
