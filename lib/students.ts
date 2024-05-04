import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

export async function getProfile(slug: string) {
	const { data } = await supabase
		.from("profiles")
		.select(
			"*, projects (name, year, slug, image, summary), blogs (name, created_at, content, project_id, id)"
		)
		.match({ slug: slug })
		.single();
	return data;
}
