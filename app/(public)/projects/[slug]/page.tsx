export default function Project({
	params: { slug },
}: {
	params: { slug: string };
}) {
	return (
		<div>
			<h1>Project: {slug}</h1>
		</div>
	);
}
