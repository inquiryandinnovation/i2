import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex">
			<nav className="w-72">

			</nav>
			{children}
		</div>
	)
}