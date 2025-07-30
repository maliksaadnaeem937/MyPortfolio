import React from "react";
import { Download } from "lucide-react";

export default function MobileNav({ toggleMenu, menuOpen }) {
  return (
    <nav
      className={`fixed z-40 top-0 right-0 bottom-0 left-0 bg-slate-900  text-white transform transition-transform duration-500 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="/Image.jpg"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          className="text-3xl font-bold leading-none focus:outline-none"
          onClick={toggleMenu}
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col gap-6 px-6 py-8 text-lg font-medium">
        <a href="/dashboard#home" className="hover:underline">
          Home
        </a>
       
        <a href="/dashboard#about" className="hover:underline">
          About
        </a>
         <a href="/dashboard#work" className="hover:underline">
          Work
        </a>
        <a href="/dashboard#contact" className="hover:underline">
          Contact
        </a>

        <a
          href="/MalikSaadNaeem(CV).pdf"
          download
          className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
}
