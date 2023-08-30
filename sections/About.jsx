import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import Image from "next/image";

const About = () => {
  return (
    <Section title="About Me" className="overflow-clip" childClass="!pb-0">
      <div className="flex flex-col-reverse gap-4 md:grid grid-cols-2 ">
        <div className="flex flex-col gap-4">
          <AnimatedButton
            rounded={"rounded-md"}
            className={{
              child:
                "bg-white relative after:block after:md:hidden after:h-7 after:bg-gradient-to-b after:from-white after:via-gray-500 after:to-black after:bottom-0 after:z-50 after:sticky after:opacity-60 after:rounded-b-md",
            }}
          >
            <div className="max-h-[50vh] md:max-h-full p-2 md:p-4 md:text-justify text-lg flex flex-col gap-y-2 justify-between overflow-y-auto relative overflow-clip pb-6">
              <div>
                <h1 className="font-semibold underline underline-offset-4">
                  Who am I?
                </h1>
                <p>
                  I am a 3rd year 👨🏼‍🎓 student pursuing B.Tech in 💻 Computer
                  Science and Engineering from 🏫 Vellore Institute of
                  Technology, Vellore. I am a passionate 👨🏼‍💻 developer and a tech
                  enthusiast. I love to ✨ explore new technologies and leverage
                  them to solve real-life problems. 🕸 I am into Web Development
                  for almost 2 years and currently working on my Data Structures
                  and Algorithms. I also keep an understanding of web
                  fundamentals, security issues and SEO optimization.
                </p>
              </div>
              <div>
                <h1 className="font-semibold underline underline-offset-4">
                  What do I do?
                </h1>
                <p>
                  I am a Full Stack Web Developer strong in frontend
                  development. I love building beautiful and responsive
                  websites.
                </p>
              </div>
              <div>
                <h1 className="font-semibold underline underline-offset-4">
                  What am I looking for?
                </h1>
                <p>
                  I am looking for a Software Developer Internships in a
                  company/startup where I can learn and grow as a developer and
                  contribute to the company&apos;s growth. My strong area is
                  full stack web development and I am currently working on my
                  Data Structures and Algorithms. But I am also interested in
                  system design so I am continuously learning about different
                  system design patterns, architectures and scalability.
                </p>
              </div>
            </div>
          </AnimatedButton>
          <AnimatedButton
            rounded={"rounded-full"}
            className={{
              body: "font-semibold text-center md:w-fit ",
              child: "bg-yellow-200   text-black text-2xl ",
            }}
          >
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1eAssDp4X_U64H14vKTyFNKWHnsBqrDLT/view"
              className="flex gap-x-2 items-center justify-center md:px-8 p-4"
            >
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </span>
              Resume
            </a>
          </AnimatedButton>
        </div>

        <div className=" h-full w-full justify-center items-center hidden md:flex">
          <Image
            src="/hero-ill.svg"
            width={500}
            height={500}
            alt="Ayush Mhetre"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
