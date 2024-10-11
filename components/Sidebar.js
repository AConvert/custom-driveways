import { Link as ScrollLink } from "react-scroll";

export default function Sidebar({ open, setOpen }) {
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
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-0 transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="w-64 bg-white h-full p-6">
        <button onClick={() => setOpen(false)} className="text-secondary mb-4">
          Close
        </button>
        <nav className="space-y-4">
          {links.map((link) => (
            <ScrollLink
              to={link.section}
              smooth
              key={link.section}
              onClick={() => setOpen(false)}
              className="block cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
