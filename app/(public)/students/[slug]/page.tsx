export default function Student({
    params: { slug },
  }: {
    params: { slug: string };
  }) {
    return (
        <div>
            <h1>Student: {slug}</h1>
        </div>
    )
    }