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
              child: "bg-white",
            }}
          >
            <div className="max-h-[50vh] p-2 md:p-4 md:text-justify text-lg flex flex-col md:gap-y-4 justify-between overflow-y-auto relative overflow-clip pb-6">
              <div className="block opacity-60 bg-gradient-to-b from-white via-gray-500 to-black h-5 w-full md:hidden fixed bottom-0 z-[60] -ml-2" />
              <p>Example text:</p>
              <ul>
                <li>
                  <strong>HTML</strong> is the language that is used to create
                </li>
                <li>
                  <strong>CSS</strong> is the language that is used to design
                </li>
                <li>
                  <strong>JavaScript</strong> is the language that is used to
                  make the website interactive
                </li>

                <li>
                  <strong>React.js</strong> is a JavaScript library that is used
                  to create user interfaces
                </li>
              </ul>

              <p>
                I am a Front-End Developer. I am a student at the University of
                Mumbai. I am currently pursuing a Bachelor of Science degree in
                Information Technology. I am a self-taught Front-End Developer.
                I have been learning web development for the past 2 years. I
                have worked on many projects. I have also worked on some
                freelance projects. I am a hard-working person. I am a
                self-motivated person. I am a quick learner. I am a team player.
                I am a good listener. I am a good communicator. I am always
                ready to learn new things.
              </p>
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
