export default function Student({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div className="w-full bg-slate-300 h-64 flex items-end justify-center">
        <div className="max-w-screen-lg w-full bg-slate-800 h-24 flex items-center relative">
          <div className="h-44 w-44 bg-slate-500 rounded-full bottom-0 left-0"></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-white">student.full_name</h1>
            <p className="text-white">student.class</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex">test</div>
    </>
  );
}
