import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import Image from "next/image";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w-]+/g, "");

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-[100] bg-white rounded-b-lg border border-black">
        <div className="container mx-auto w-full  flex justify-between p-4 text-4xl items-center">
          <div className="flex bg-bg border-black border p-4 rounded-full w-[80px]  h-[80px] items-center justify-center">
            <h1 className="font-semibold">AM</h1>
          </div>
          <div>Links</div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col gap-y-12 px-4 container mx-auto mt-8">
        <div className="w-fit">
          <AnimatedButton rounded={"rounded-full"}>
            <button className="px-8 py-2 bg-yellow-400 text-2xl">Resume</button>
          </AnimatedButton>
        </div>

        <Section title="Skills">
          <div className="flex w-full gap-4 cursor-default flex-wrap justify-between">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "Firebase",
              "TailwindCSS",
              "Bootstrap",
              "GraphQL",
              "MongoDB",
              "Socket.io",
            ].map((skill) => (
              <AnimatedButton
                key={skill}
                rounded={"rounded-md"}
                className="md:!w-fit !w-full"
              >
                <div className="flex items-center justify-center bg-white p-4">
                  <Image
                    alt={skill}
                    className="rounded-full border border-black p-1"
                    src={`/icons/${slugify(skill)}.svg`}
                    width={50}
                    height={50}
                  />
                  <p className="px-4 text-2xl">{skill}</p>
                </div>
              </AnimatedButton>
            ))}
          </div>
        </Section>
        <div className="w-full h-[200vh]" />
      </main>
    </>
  );
}
