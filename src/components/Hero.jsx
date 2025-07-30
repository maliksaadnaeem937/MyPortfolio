import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  const words = [
    "I'm Malik Saad",
    "a Web Developer",
    "a Learner",
    "Full-Stack",
    "Coder &",
    "More",
  ];
  return (
    <main className="mt-[58px] px-4 py-16 bg-white " id="home">
      <div className="flex flex-col-reverse items-center justify-between gap-12 sm:flex-row max-w-6xl mx-auto">
        <section className="text-center sm:text-left space-y-6">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <h3 className="text-xl sm:text-2xl text-gray-600">Hi,</h3>
            <Typewriter
              words={words}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1500}
              className="text-gray-900"
            />
          </div>

          <p className="text-gray-600 text-lg max-w-md mx-auto sm:mx-0">
            Crafting modern web applications with intuitive design and powerful
            backend.
          </p>

          <div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition"
              onClick={() => {
                const phone = "923467560108"; // No plus sign
                const message = "Hello! I'm interested in your services.";
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(url, "_blank");
              }}
            >
              Let’s Talk
            </button>
          </div>
        </section>

        <section className="w-full max-w-xs sm:max-w-sm lg:max-w-md animate-fade-in">
          <img
            src="/Image.jpg"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
            alt="Hero"
          />
        </section>
      </div>
    </main>
  );
}
