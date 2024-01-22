import { EmailEnvelopeIcon } from "@/Components/AllIcons";
import { Links } from "./_components/Links";

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
              <EmailEnvelopeIcon />
            </span>
            mhetreayush1719@gmail.com
          </a>
        </div>
        <div className="flex gap-x-4 items-center justify-center">
          <Links />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
