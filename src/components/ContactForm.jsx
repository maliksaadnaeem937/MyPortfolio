import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Modal from "./Modal";
export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", body: "" });

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
  const removeModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const templateParams = {
      to_name: "Malik Saad Naeem",
      from_name: name,
      from_phone: phone,
      from_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setModalMessage({
        title: "Thank You!",
        body: "Your message has been sent successfully. We will get back to you shortly.",
      });
    } catch (error) {
      setModalMessage({
        title: "Error!",
        body: `There was an error sending your message. Please try again later.\nError: ${error.text}`,
      });
    } finally {
      setIsLoading(false);
      setModalOpen(true);
    }

    e.target.reset();
  };

  return (
    <section className="px-4 py-8" id="contact">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-center text-blue-700">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-[40%]">
            <img
              src="/ContactUs.png"
              alt="Contact Us"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[60%] bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 py-2 px-4 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {isLoading && <Loader></Loader>}
      {modalOpen && (
        <Modal message={modalMessage} removeModal={removeModal}></Modal>
      )}
    </section>
  );
}
