import { getProfile } from "@/lib/students";
import Image from "next/image";
import { notFound } from "next/navigation";
import backgroundImage from "@/public/placeholders/backdrop.jpg";
import Link from "next/link";

export default async function Student({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const student = await getProfile(slug);
	if (!student) {
		return notFound();
	}
	return (
		<>
			<div className="relative flex h-64 w-full items-end justify-center">
				<Image
					src={student.background_image_url || backgroundImage}
					alt="Background Image"
					objectFit="cover"
					draggable={false}
					className="z-0 select-none"
					quality={95}
					fill
				/>
				<div className="relative flex h-24 w-full max-w-screen-lg items-center">
					<Image
						src={student.avatar_url || backgroundImage}
						alt={`A photo of ${student.full_name}`}
						className="bottom-0 left-0 h-44 w-44 select-none rounded-full"
						draggable={false}
						height={100}
						width={100}
					/>
				</div>
			</div>
			<div className="mx-auto flex w-full max-w-screen-lg">
				<div className="flex grow py-12">
					<div className="flex-1 flex-col ">
						<h1 className="text-4xl font-bold">{student.full_name}</h1>
						<h2 className="text-xl">{student.class}</h2>
						<p className="flex-1 py-8 pr-8">{student.bio}</p>
						<div className="flex">
							<div className="flex-1">
								<h2 className="pr-8 text-2xl font-semibold text-emerald-900">
									Blogs
								</h2>
								<div className="grid grid-cols-2 gap-6 pr-8">
									{student.blogs
										.sort(
											(a, b) =>
												new Date(b.created_at).getTime() -
												new Date(a.created_at).getTime()
										)
										.map((blog, index) => (
											<div
												className={`flex flex-col ${index === 0 ? "col-span-2 border-b border-gray-300" : ""}`}
											>
												<Link href={`/blogs/${blog.id}`}>
													<h3
														className={`line-clamp-2 font-bold ${index === 0 ? "text-xl" : "text-lg"}`}
													>
														{blog.name}
													</h3>
													<div>
														{new Date(blog.created_at).toLocaleDateString(
															"en-US",
															{
																year: "numeric",
																month: "long",
																day: "numeric",
															}
														)}
													</div>
													<div
														className={`${index === 0 ? "line-clamp-5" : ""}`}
													>
														{blog.content}
													</div>
												</Link>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-80 flex-col">
						<h2 className="text-2xl font-semibold text-emerald-900">
							Projects
						</h2>
						<div className="my-4 space-y-5">
							{student.projects
								.sort((a, b) => b.year - a.year)
								.map((project) => (
									<div
										className="h-64 overflow-hidden rounded-lg border border-gray-300"
										key={slug}
									>
										<Link href={`/projects/${project.slug}`}>
											<Image
												src={project.image || backgroundImage}
												alt={`Image of`}
												width={300}
												height={100}
												className="h-28 w-full object-cover"
											/>
											<h2 className="mt-2 line-clamp-1 px-5 text-lg font-medium">
												{project.name}
											</h2>
											<p className="line-clamp-3 p-5 pt-0">{project.summary}</p>
										</Link>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
