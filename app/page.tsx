import {
  Navbar,
  About,
  Skills,
  Projects,
  Experience,
  Blogs,
  ContactMe,
  Footer,
} from "@/sections";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col px-4 md:px-8 container mx-auto pb-8 md:gap-y-14">
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Blogs /> */}
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
