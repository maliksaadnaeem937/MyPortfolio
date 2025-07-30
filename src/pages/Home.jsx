import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Solutions></Solutions>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
