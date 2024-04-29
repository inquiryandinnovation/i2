import Table from "@/components/table";
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
			<Table cols={["Name", "Email", "Blogs", "Complete Profile", ""]} />
			{/* Navigation */}
			<section></section>
		</>
	);
}
