import React from "react";
import { Globe, Code, Atom, Server, Palette } from "lucide-react";

const iconMap = {
  Globe: Globe,
  Code: Code,
  Atom: Atom,
  Server: Server,
  Palette: Palette,
};

export default function Cards({ title, icon, description, skills }) {
  const Icon = iconMap[icon] || Globe;

  return (
    <div className="max-w-[260px] w-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 space-y-4">
      <div className="flex justify-center items-center">
        <Icon className="w-10 h-10 text-white" />
      </div>

      <h2 className="text-xl font-semibold text-center">{title}</h2>

      <p className="text-sm text-gray-100 text-center">{description}</p>

      <div className="mt-2 space-y-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/20 px-3 py-1 rounded-full text-xs text-center backdrop-blur-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
