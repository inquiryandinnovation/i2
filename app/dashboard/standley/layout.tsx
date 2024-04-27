import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex h-screen">
			<nav className="w-72 p-8 grid gap-8 border-r">
				<section></section>
				<section></section>
				<section className="mt-auto"></section>
			</nav>
			{children}
			<div>
				<section>

				</section>
				<section>

				</section>
			</div>
		</div>
	)
}