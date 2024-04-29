import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseurl = "https://i2.today";

	const { data: students } = await supabase.from("profiles").select("slug");
	const { data: projects } = await supabase.from("projects").select("slug");
	const { data: blogs } = await supabase.from("blogs").select("id");

	const studenturls = students?.map((student: { slug: string }) => {
		return {
			url: `${baseurl}/students/${student.slug}`,
			lastModified: new Date(),
		};
	});

	const projecturls = projects?.map((project: { slug: string }) => {
		return {
			url: `${baseurl}/projects/${project.slug}`,
			lastModified: new Date(),
		};
	});

	const blogurls = blogs?.map((blog: { id: string }) => {
		return {
			url: `${baseurl}/blogs/${blog.id}`,
			lastModified: new Date(),
		};
	});

	return [
		{
			url: `${baseurl}/`,
			lastModified: new Date(),
		},
		{
			url: `${baseurl}/students`,
			lastModified: new Date(),
		},
		{
			url: `${baseurl}/projects`,
			lastModified: new Date(),
		},
		{
			url: `${baseurl}/blogs`,
			lastModified: new Date(),
		},
		...(studenturls as { url: string; lastModified: Date }[]),
		...(projecturls as { url: string; lastModified: Date }[]),
		...(blogurls as { url: string; lastModified: Date }[]),
	];
}
