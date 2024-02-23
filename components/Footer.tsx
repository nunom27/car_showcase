import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap text-black-100 mt-5 border-t border-gray-100 md:flex-nowrap">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            className="object-contain"
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            CarHub by <i>Os cujo nome não deve ser mencionado</i> 🤐
            <br />
            All rights reserved 2024 &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-y-20 gap-x-5 md:gap-x-4 lg:gap-20 lg:flex-nowrap">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col text-base min-w-[170px] gap-6"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
