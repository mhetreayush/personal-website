"use client";

import { AnimatedButton } from "@/components/AnimatedButton";
import { useNavLinkStore } from "@/lib/hooks/useNavLinkStore";
import Image from "next/image";
import { useState } from "react";
import { Links } from "./components/Links";
import { CrossIcon, HambugerIcon } from "../AllIcons";

const Navbar = () => {
  const active = useNavLinkStore((state) => state.active);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="sticky top-0 z-[100] bg-white rounded-b-lg border border-black cursor-default -mt-16 ">
      <div className="container mx-auto  flex w-full  justify-between p-8 py-2 items-center">
        <a
          className=" border-2 border-black border-opacity-50 rounded-md overflow-clip"
          href="/"
          aria-label="Home"
        >
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Logo"
            className="p-1 hover:scale-110 transition-all duration-300 ease-in-out"
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
              aria-label="Open Mobile Nav"
            >
              <HambugerIcon />
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
                  aria-label="Close Mobile Nav"
                >
                  <CrossIcon />
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

export { Navbar };
