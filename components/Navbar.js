import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ open, setOpen }) => {
  const links = [
    {
      name: "Home",
      section: "hero",
    },
    {
      name: "Services",
      section: "services",
    },
    { name: "Projects", section: "projects" },
    { name: "About Us", section: "about" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 md:bg-black text-white text-xl font-semibold px-1 md:px-8">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="hidden md:flex justify-center flex-1 space-x-4 font-sans">
          {links.map((link) => (
            <ScrollLink
              to={link.section}
              smooth
              key={link.section}
              className="cursor-pointer hover:bg-third hover:text-white transition-all duration-300 px-4 py-2 rounded-2xl"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-white px-3 py-2 rounded-full border border-black bg-third"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
