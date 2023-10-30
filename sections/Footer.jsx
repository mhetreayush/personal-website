import { slugify } from "@/lib/utils/slugify";
import Image from "next/image";

const links = [
  {
    label: "Github",
    url: "https://github.com/mhetreayush",
  },
  {
    label: "StackOverflow",
    url: "https://stackoverflow.com/users/22811320/ayush-mhetre",
  },
  {
    label: "Medium",
    url: "https://medium.com/@mhetreayush1719",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ayush-mhetre-662709227/",
  },
  {
    label: "Phone",
    url: "tel:+917020860691",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border border-black rounded-t-md">
      <div className="container mx-auto  flex md:flex-row flex-col-reverse gap-y-2 w-full  justify-between p-8 py-4 md:items-center ">
        <div className="mt-2 md:mt-0">
          <p>Designed & Developed by</p>
          <p className="font-semibold text-lg">Ayush Mhetre</p>
          <a
            href="mailto:mhetreayush1719@gmail.com"
            className="flex items-center gap-x-2 mt-2"
          >
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            mhetreayush1719@gmail.com
          </a>
        </div>
        <div className="flex gap-x-4 items-center justify-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              alt={link.label}
              target="_blank"
              aria-label={link.label}
            >
              <Image
                src={`/icons/${slugify(link.label)}.svg`}
                width={36}
                height={36}
                alt={link.label}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
