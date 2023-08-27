import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import Image from "next/image";

const projects = [
  {
    name: "Project 1",
    description: "This is a project1",
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 2",
    description: (
      <>
        <ul>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
          <li>This is a project2</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 3",
    description: (
      <>
        <ul>
          <li>This is a project3</li>
          <li>This is a project3</li>
          <li>This is a project3</li>
          <li>This is a project3</li>
          <li>This is a project3</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 4",
    description: (
      <>
        <ul>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
          <li>This is a project4</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 5",
    description: (
      <>
        <ul>
          <li>This is a project5</li>
          <li>This is a project5</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 6",
    description: (
      <>
        <ul>
          <li>This is a project6</li>
          <li>This is a project6</li>

          <li>This is a project6</li>
          <li>This is a project6</li>
          <li>This is a project6</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
  {
    name: "Project 7",
    description: (
      <>
        <ul>
          <li>This is a project7</li>
          <li>This is a project7</li>
          <li>This is a project7</li>
        </ul>
      </>
    ),
    demo: "https://www.google.com",
    sourceCode: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="lg:columns-3 md:columns-2 columns-1 space-x-2 space-y-2 group ">
        {projects.map((project, index) => (
          <div
            className={`break-inside-avoid pb-2 hover:group-only:blur-0 group-hover:blur-sm transition-all duration-200 ease-in-out `}
            key={index}
          >
            <AnimatedButton rounded={"rounded-md"}>
              <div className="flex flex-col space-y-2 bg-white rounded-md p-2">
                <div className="flex justify-between">
                  <p className="font-semibold text-2xl">{project.name}</p>
                  <div className="flex gap-x-2 items-center">
                    <a href={project.demo} target="_blank">
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
                    </a>

                    <a href={project.sourceCode} target="_blank">
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
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                {project.description}
              </div>
            </AnimatedButton>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
