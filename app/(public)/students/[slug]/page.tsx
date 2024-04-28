import Image from "next/image";

export default function Student({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div className="w-full h-64 flex items-end relative justify-center">
        <Image
          src="https://images.unsplash.com/photo-1713999212351-78f54ee46d9e?q=80&w=3055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 brightness-75	"
        />
        <div className="max-w-screen-lg w-full h-24 flex items-center relative">
          <div className="h-44 w-44 bg-slate-500 rounded-full bottom-0 left-0"></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">
              student.full_name
            </h1>
            <p className="text-white">student.class</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex">test</div>
    </>
  );
}
