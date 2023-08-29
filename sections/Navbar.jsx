"use client";

import AnimatedButton from "@/components/Buttons/AnimatedButton";
import { slugify } from "@/lib/utils/slugify";
import useNavLinkStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const linksArray = [
  "About Me",
  "Skills",
  "Projects",
  "Experience",
  "Blogs",
  "Contact Me",
];

const Links = ({ active, setMobileNav = () => {} }) =>
  linksArray.map((link, index) => {
    const newLink = slugify(link);
    return (
      <Link
        href={`#${newLink}`}
        key={index}
        onClick={() => {
          setMobileNav(false);
          console.log("clicked");
        }}
      >
        <AnimatedButton
          rounded="rounded-md"
          active={newLink == active}
          className={{
            child: `${
              newLink == active ? "bg-purple-400 text-white" : "bg-white"
            } font-semibold text-lg`,
          }}
        >
          <p className="rounded-md p-2">{link}</p>
        </AnimatedButton>
      </Link>
    );
  });

const Navbar = () => {
  const active = useNavLinkStore((state) => state.active);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="sticky top-0 z-[100] bg-white rounded-b-lg border border-black cursor-default -mt-16 ">
      <div className="container mx-auto  flex w-full  justify-between p-8 py-2 items-center">
        <a
          className=" border-2 border-black border-opacity-50 rounded-md"
          href="/"
        >
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Logo"
            className="p-1 "
          />
        </a>
        <div className="hidden md:flex gap-x-3">
          <Links active={active} />
        </div>
        <div className="md:hidden">
          <AnimatedButton rounded="rounded-md">
            <button
              className="p-2 rounded-md border-black border-opacity-50 border-[1px] bg-bg"
              onClick={() => setMobileNav(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </AnimatedButton>
          <div
            className={`absolute top-0 left-0 w-full h-screen backdrop-blur-md z-[100] ${
              !mobileNav && "-translate-y-[100%] backdrop-blur-0"
            } duration-300 ease-in-out transition-all`}
          >
            <div className="h-fit  bg-bg flex flex-col gap-y-4 px-4 pt-4 pb-8 rounded-b-md border border-black ">
              <AnimatedButton
                rounded="rounded-md"
                className={{
                  body: "w-fit self-end",
                }}
              >
                <button
                  className="p-2 rounded-md border-black border-opacity-50 border-[1px] bg-bg "
                  onClick={() => setMobileNav(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </AnimatedButton>
              <Links active={active} setMobileNav={setMobileNav} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
