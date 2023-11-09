import { ProjectType } from "./types";

export const projects_data: ProjectType[] = [
  {
    name: "DoGether",
    type: "Hackathon - Self made",
    description: (
      <>
        <p>
          A platform where women can collaborate and work together on a project.
          This platform promotes women empowerment.
        </p>
        <ul>
          <li>A woman hosts a project.</li>
          <li>
            Other women with similar interests and skills can join as
            collaborators.
          </li>
          <li>The team works together to complete the project.</li>
        </ul>
      </>
    ),
    demo: "https://wt-23.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/wt-23",
    tags: ["NextJS", "Firebase", "TailwindCSS", "Dynamic_Routing"],
  },
  {
    name: "Research Pilot",
    type: "Hackathon - Self made",
    description: (
      <>
        <p>
          Research API and AI API based idea generation and project analysis
          tool.
        </p>
        <ul>
          <li>
            A platform where user enters keyword and gets several product ideas
            based on those keywords.
          </li>
          <li>
            The platform also provides problem statement definition, market
            research, competitor analysis.
          </li>
          <li>
            The platform also provides questionnaire which also has a
            globally-accessible link.
          </li>
          <li>The link can be shared and responses could be collected.</li>
          <li>
            The responses could be viewed in the form of pie charts in a
            dedicated section.
          </li>
        </ul>
      </>
    ),
    demo: "https://ignitia-23.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/ignitia-23",
    tags: [
      "NextJS",
      "Firebase",
      "TailwindCSS",
      "Dynamic_Routing",
      "OpenAI_API",
      "ChatGPT",
      "Prompts",
      "ChartJS",
    ],
  },
  {
    name: "Google Clone",
    type: "Personal - Tutorial based",
    description: (
      <>
        <p>Working clone of Google Search Engine.</p>
        <ul>
          <li>Search is provided using Google Custom Search API.</li>
        </ul>
      </>
    ),
    demo: "https://google-clone-rouge-beta.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/google-clone",
    tags: [
      "NextJS",
      "Google",
      "TailwindCSS",
      "Dynamic_Routing",
      "Google_Custom_Search_API",
    ],
  },
  {
    name: "Drag and Drop Todo App",
    type: "Personal - Tutorial based",
    description: (
      <>
        <p>Todo app that uses drag and drop for organization of tasks.</p>
        <ul>
          <li>Drag and drop functionality.</li>
          <li>Appwrite for backend.</li>
          <li>Zustand for state management.</li>
        </ul>
      </>
    ),
    demo: "https://no-todo-app.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/NoTodoApp",
    tags: ["NextJS", "React_Beautiful_DND", "Zustand", "Appwrite"],
  },
  {
    name: "Instagram clone",
    type: "Personal - Tutorial based",
    description: (
      <>
        <p>Working clone of social media app, Instagram</p>
        <ul>
          <li>User can create account.</li>
          <li>User can create a post.</li>
          <li>User can like a post.</li>
          <li>User can comment on a post.</li>
          <li>User can reply to a comment.</li>
        </ul>
      </>
    ),
    demo: "https://insta-clone-nine.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/insta-clone",
    tags: [
      "NextJS",
      "FakerJS",
      "TailwindCSS",
      "Firebase",
      "Dynamic_Routing",
      "Recoil_State_Management",
      "Next_Auth",
    ],
  },
  {
    name: "Personal Website",
    type: "Personal - Self made",
    description: (
      <>
        <p>My personal (this) website.</p>
        <ul>
          <li>Complete project is written in TypeScript</li>
          <li>
            Used intersection-observer API for dynamic navbar highlighting.
          </li>
          <li>Designed and developed by me.</li>
          <li>Used Zustand for state management.</li>
          <li>Used EmailJS for contact me form.</li>
        </ul>
      </>
    ),
    demo: "https://ayushm.vercel.app/",
    sourceCode: "https://github.com/mhetreayush/personal-website",
    tags: [
      "NextJS",
      "TailwindCSS",
      "Zustand",
      "Dynamic_Routing",
      "Personal_Website",
      "Intersection_Observer_API",
      "EmailJS",
    ],
  },
];

const Projects = () => null;

export default Projects;
