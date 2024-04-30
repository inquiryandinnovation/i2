export default function Project({
	params: { slug },
}: {
	params: { slug: string };
}) {
	return (
		<div>
			<h1>Blog: {slug}</h1>
		</div>
	);
}
