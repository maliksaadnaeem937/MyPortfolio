import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  const toggleMenu = () => {
    setMenuOpen((curr) => !curr);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 opacity-90 fixed top-0 left-0 w-full z-50 shadow-lg h-20">
      <div className="w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-white shadow-md">
        <img
          src="/Image.jpg"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden sm:block">
        <div className="flex gap-x-6 text-sm font-semibold tracking-wide text-blue-500">
          <a
            href="#home"
            className="hover:text-indigo-500 hover:scale-105 transition-transform duration-200"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-indigo-500  hover:scale-105 transition-transform duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-indigo-500  hover:scale-105 transition-transform duration-200"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-500  hover:scale-105 transition-transform duration-200"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <a
          href="/MalikSaadNaeem(CV).pdf"
          download
          className="hidden sm:flex items-center gap-x-2 bg-blue-500 text-black text-sm px-4 py-2 rounded-md hover:bg-indigo-500 transition"
        >
          <Download className="w-4 h-4" />
          <span>Resume</span>
        </a>

        <button
          className="block sm:hidden text-3xl text-black focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      <MobileNav toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </nav>
  );
}
