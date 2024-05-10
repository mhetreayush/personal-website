import { Navbar, About, Skills, Projects, Experience, Blogs, ContactMe, Footer, OpenSource } from '@/sections';

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col px-4 md:px-8 container mx-auto pb-8 md:gap-y-14">
        <About />
        <Skills />
        <Experience />
        <OpenSource />
        <Projects />
        <Blogs />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
