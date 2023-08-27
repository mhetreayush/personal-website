import { sections } from "@/sections/Sections";
export default async function Home() {
  return (
    <>
      <sections.Navbar />
      <main className="flex min-h-screen flex-col gap-y-16 px-4 md:px-8 container mx-auto mt-8 pb-8">
        <sections.About />
        <sections.Skills />
        <sections.Projects />
        <sections.Experience />
        <sections.Blogs />
        <sections.ContactMe />
      </main>
    </>
  );
}
