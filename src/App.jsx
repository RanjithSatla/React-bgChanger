import { useState } from "react";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#2a2a2a");

  return (
    // <div
    //   className={`min-h-screen w-full flex items-end justify-center pb-12 transition-colors duration-300 ${
    //     backgroundColor === "red"
    //       ? "bg-red-500"
    //       : backgroundColor === "green"
    //       ? "bg-green-500"
    //       : "bg-blue-500"
    //   }`}
    // >
    //   {/* Button Container */}
    //   <div className="flex gap-4">
    //     {/* Red Button */}
    //     <button
    //       onClick={() => setBackgroundColor("red")}
    //       className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-red-600 transform hover:scale-105 transition-all duration-200"
    //     >
    //       Red
    //     </button>

    //     {/* Green Button */}
    //     <button
    //       onClick={() => setBackgroundColor("green")}
    //       className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-200"
    //     >
    //       Green
    //     </button>

    //     {/* Blue Button */}
    //     <button
    //       onClick={() => setBackgroundColor("blue")}
    //       className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
    //     >
    //       Blue
    //     </button>
    //   </div>
    // </div>
    <div
      className="min-h-screen w-full flex items-end justify-center pb-12 transition-colors duration-300"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex gap-4 bg-white px-3 py-2 rounded-3xl shadow-lg ">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg "
          onClick={() => setBackgroundColor("green")}
        >
          Green
        </button>
        <button
          className="px-6 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg"
          onClick={() => setBackgroundColor("red")}
        >
          Red
        </button>
        <button
          className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg"
          onClick={() => setBackgroundColor("blue")}
        >
          Blue
        </button>
      </div>
    </div>
  );
}
