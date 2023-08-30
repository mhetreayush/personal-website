import { sections } from "@/sections/Sections";
export default function Home() {
  return (
    <>
      <sections.Navbar />
      <main className="flex min-h-screen flex-col px-4 md:px-8 container mx-auto pb-8 md:gap-y-14">
        <sections.About />
        <sections.Skills />
        <sections.Projects />
        <sections.Experience />
        <sections.Blogs />
        <sections.ContactMe />
      </main>
      <sections.Footer />
    </>
  );
}
