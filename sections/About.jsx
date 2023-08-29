import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import Image from "next/image";

const About = () => {
  return (
    <Section title="About Me">
      <div className="flex flex-col-reverse gap-4 md:grid grid-cols-2 ">
        <div>
          <div className="h-[50vh]" />
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
        <div className="flex h-full w-full items-center justify-center relative">
          <p className="absolute bg-black text-white border-4 border-white p-4 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[100]">
            Better picture here.
          </p>
          <AnimatedButton
            rounded="rounded-full"
            className={{
              body: "h-fit",
            }}
          >
            <div className="p-4 rounded-full bg-white relative">
              <Image
                className="rounded-full border border-black blur-md"
                src="/profile.png"
                width={300}
                height={300}
                alt="Ayush Mhetre"
              />
            </div>
          </AnimatedButton>
        </div>
      </div>
    </Section>
  );
};

export default About;
