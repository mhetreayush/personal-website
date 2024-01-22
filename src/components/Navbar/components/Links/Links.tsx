import { AnimatedButton } from "@/Components/AnimatedButton";
import Link from "next/link";
import { LinksProps } from "./types";
import { slugify } from "@/lib/utils/slugify";

const linksArray = [
  "About Me",
  "Skills",
  "Projects",
  "Experience",
  "Blogs",
  "Contact Me",
];

const Links = ({ active, setMobileNav = () => {} }: LinksProps) =>
  linksArray.map((link, index) => {
    const newLink = slugify(link);
    return (
      <Link
        href={`#${newLink}`}
        key={index}
        onClick={() => setMobileNav(false)}
        aria-label={link}
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

export { Links };
