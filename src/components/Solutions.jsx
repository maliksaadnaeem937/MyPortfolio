import Cards from "./Card";
import { myExpertise } from "../dummyData/projects";

export default function Solutions() {
  return (
    <section className="px-4 mb-8  " id="expertise">
      <div className="max-w-6xl mx-auto space-y-4  flex flex-col  justify-center items-center">
        <h2 className="text-3xl font-bold  text-gray-800">
          All Kinds of Coding Solutions
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-500 leading-relaxed text-center font-medium max-w-3xl">
          I offer a variety of coding services tailored to your needs. Whether
          it’s front-end design, back-end logic, or full-stack development, I
          bring practical, scalable solutions with clean, modern code.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-6 flex flex-wrap gap-4 justify-center">
        {myExpertise.map((data, index) => (
          <Cards
            key={index}
            title={data.title}
            icon={data.icon}
            skills={data.skills}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}
