import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseurl = "https://i2.today";

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
	];
}
