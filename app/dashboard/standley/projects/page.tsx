import { Table, TableCol } from "@/components/table";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const cols: TableCol[] = [
	{
		name: "Name",
		col: "name",
		className: "font-medium",
		link: "/projects/[slug]",
		// search: true
	},
	{ name: "Year", col: "year" },
	{ name: "Summary", col: "summary" },
	{ name: "Team", profiles: true },
	{ name: "Infographics", col: "infographic_urls", count: true },
	{ name: "Tags", col: "tags", count: true },
	// {
	// 	name: "Complete",
		// will allow him to filter by these cols in these categories, but by default will show a checkmark if the values he sets are fulfilled.
		// this will also check and add any cols to the origional fetch call if a col is not being fetched
		// it will also use a name specified in the above names if you use a col referanced already. if not, you can add a custom name or it'll just 
		// set the first letter to uppercase in the col you specify.
		// filtering: {
		// 	schema: [
		// 		{
		// 			col: "name",
		// 			length: true,
		// 			exists: true,
		// 		},
		// 		{
		// 			col: "profiles",
		// 			exists: true
		// 		},
		// 		{
		// 			col: "infographic_urls",
		// 			exists: true,
		// 			arrayLength: true,
		// 		},
		// 		{
		// 			col: "tags",
		// 			exists: true,
		// 			arrayLength: true,
		// 		},
		// 		{
		// 			col: "year",
		// 			name: "Year",
		// 			exists: true,
		// 			largerThan: true,
		// 		},
		// 		{
		// 			col: "image",
		// 			name: "Image",
		// 			exists: true,
		// 		},
					// {
					// 	col: "videos",
					// 	exists: true,
					// 	length: true
					// }
		// 		{
		// 			col: "content",
		// 			exists: true,
		// 			length: true
		// 		}
		// 	],
		// 	default: [{}],
		// },
	// },
	{
		name: "",
		col: "slug",
		displayText: "Edit",
		link: "/dashboard/students/projects/[slug]",
		className: "font-medium text-green-700",
	},
];

export default function Page() {
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
