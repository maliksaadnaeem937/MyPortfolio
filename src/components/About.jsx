import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
export default function About() {
  const words = [
    "I'm Malik Saad",
    "a Web Developer",
    "a Designer",
    "a Learner",
  ];
  return (
    <section className="bg-white px-4 py-12 sm:py-16 " id="about">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center space-y-8 text-center sm:text-left ">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
           About Me
          </h1>
        </div>

        <p className="text-base sm:text-lg text-justify md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto sm:mx-0">
          I'm a passionate web developer focused on building responsive and
          user-friendly websites. I specialize in creating fast, modern, and
          accessible web experiences using React and Tailwind CSS. With a strong
          foundation in both front-end and back-end technologies, I love turning
          ideas into real-world applications. Currently, I’m exploring
          full-stack development using the MERN stack and continuously pushing
          my boundaries in tech.
        </p>
      </div>
    </section>
  );
}
