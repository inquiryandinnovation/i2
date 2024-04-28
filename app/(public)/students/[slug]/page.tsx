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
          src="https://images.unsplash.com/photo-1490598000245-075175152d25?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          draggable={false}
          className="z-0 select-none"
        />
        <div className="max-w-screen-xl w-full h-24 flex items-center relative">
          <Image
            src={
              "https://i2.today/wp-content/uploads/2021/08/09C3261F-D6E4-4798-AA95-D61F0968C3A6-2-scaled-e1631213842647.jpeg"
            }
            alt="background"
            className="h-44 w-44 select-none rounded-full bottom-0 left-0"
            draggable={false}
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex">
        <div className="flex-1 flex-col py-12">
          <h1 className="font-bold text-4xl">Alexis Lo</h1>
          <h2 className="text-xl">2025</h2>
          <p className="py-4">
            Hi, my name is Alexis Lo, and I am a junior at SHC. Academically, my
            favorite subjects are math and science. Something about math is the
            satisfaction of getting a problem right and knowing that you
            achieved something through that long process. Solving math problems
            is something that I enjoy the challenge of, so math has been one of
            my favorite subjects since elementary school. On the other hand, I
            enjoy science because I like being able to understand the world
            around me. This year, I am building from my classes last year to
            take 4 APs (AP Computer Science A, AP Mandarin, AP Language and
            Composition, and AP Calculus AB), 1 Honors (Biology 1,2H), along
            with Ethics and U.S. History 1,2. I’m also a part of a bunch of
            clubs here at SHC, including Tech Crew (lighting) and being a leader
            in the Photography Club. Outside of school, I currently take ballet
            classes about four times a week. Over the past year, it has become
            an 8-10 hours-a-week commitment. Dancing has taught me several
            skills and life lessons that everyone should learn in their life,
            such as discipline and diligence. Being in i2 has given me so many
            valuable learning experiences. Through the passion projects the
            program has allowed me to pursue, I have learned so much about
            programming in different languages and gained better time management
            and persistence. I also look forward to the skills I can gain this
            upcoming year!
          </p>
          <div className="flex">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-emerald-900">Blogs</h2>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-emerald-900">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
