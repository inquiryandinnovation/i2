import { ReactNode } from "react";
import { Icon } from "@/lib/icon";
import { NavButtons, Page } from "../../../components/navbtn";
import {
	DocumentDuplicateIcon,
	HomeIcon,
	LightBulbIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
	const pages: Page[] = [
		{
			name: "Dashboard",
			slug: "",
			icon: <HomeIcon />,
		},
		{
			name: "Students",
			slug: "/students",
			icon: <UsersIcon />,
		},
		{
			name: "Projects",
			slug: "/projects",
			icon: <LightBulbIcon />,
		},
		{
			name: "Website",
			slug: "/website",
			icon: <DocumentDuplicateIcon />,
		},
		{
			name: "Admins",
			slug: "/admins",
			icon: <UserCircleIcon />,
		},
	];

	return (
		<div className="flex h-screen">
			{/* Left Nav */}
			<nav className="w-72 p-4 flex flex-col gap-10 border-r">
				<section className="px-2">
					<Icon className="size-7" />
				</section>
				<section>
					<NavButtons pages={pages} root="/dashboard/standley" />
				</section>
				{/* user profile popup */}
				<section className="mt-auto">
					<Link
						href="/profile/settings"
						className="p-2 hover:bg-gray-50 flex items-center font-medium rounded-md transition group"
					>
						<img
							src="/person.jpg"
							className="size-6 rounded-full object-cover mr-4"
						/>
						<p className="group-hover:text-green-700">Jane Doe</p>
					</Link>
				</section>
			</nav>
			{/* Main body */}
			<div className="flex flex-col grow overflow-y-auto">
				{/* <section>top nav if we want it</section> */}
				<section>{children}</section>
			</div>
		</div>
	);
}
