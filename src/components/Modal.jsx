import { NavLink } from "react-router-dom";

export default function Modal({ message, removeModal }) {
  console.log(message);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[9999]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          {message.title}
        </h2>
        <p className="text-gray-600 text-center mb-6">{message.body}</p>
        <button
          onClick={removeModal}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-center"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
