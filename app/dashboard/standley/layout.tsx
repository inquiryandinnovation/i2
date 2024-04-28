import { ReactNode } from "react";
import { Icon } from "@/lib/icon";
import { HomeIcon } from "lucide-react";
import { NavButtons, Page } from "../navbtn";

export default function Layout({ children }: { children: ReactNode }) {
  const pages: Page[] = [
		{
			name: "Dashboard",
			slug: "",
			icon: <HomeIcon />
		}
	];

	const 

  return (
    <div className="flex h-screen">
      <nav className="w-72 p-8 flex flex-col gap-8 border-r">
        <section>
          <Icon className="h-7 w-7" />
        </section>
        <section>
					<NavButtons pages={pages} root="/dashboard/standley" />
				</section>
        <section className="mt-auto"></section>
      </nav>
      <div className="flex flex-col grow overflow-y-auto">
        <section>nav if we want it</section>
        <section>{children}</section>
      </div>
    </div>
  );
}


