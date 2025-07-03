// import { useState } from "react";
// import profile1 from "../assets/profile2.png";

// export default function Hero() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [data, setdata] = useState("");

//   const handlepopupSubmit = () => {
//     if (data.trim() === "") {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     console.log("Email submitted:", data);
//     setShowPopup(false);
//     setdata("");
//   }
//   return (
//     <section className="py-16 flex px-6 text-center relative bg-[#F5FCFF] ">
//       <div className="flex-1/4 items-start justify-center flex flex-col mx-auto">
//         <p className="text-gray-600">Hey, I am Manikandan N</p>
//         <h1 className="text-4xl text-wrap text-start md:text-5xl font-bold mt-2">
//           I create <span className="text-purple-600">product design </span>
//           and brand experience
//         </h1>
//         <p className="mt-4 text-wrap text-start max-w-3xl text-gray-500">
//           adipisicing elit. Amet sapiente cupiditate minus corrupti ab libero
//           harum deleniti, consequuntur nemo dolor, ea minima sunt fuga! Animi
//           laboriosam fugiat distinctio dicta quae?
//         </p>
//         <button
//           onClick={() => setShowPopup(true)}
//           className="mt-6 bg-purple-600 text-white px-6 py-2 cursor-pointer rounded"
//         >
//           Get in Touch
//         </button>
//       </div>
//       <img
//         src={profile1}
//         alt="Profile"
//         className="hidden lg:block flex-1 w-[300px] h-[auto]"
//       />
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-80 relative">
//             <button
//               className="absolute top-2 right-2 hover:bg-amber-400 rounded-full w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500"
//               onClick={() => setShowPopup(false)}
//             >
//               ✕
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Enter your Email</h2>
//             <input
//               type="email"
//               value={data}
//               onChange={(e) => setdata(e.target.value)}
//               placeholder="example@email.com"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handlepopupSubmit}
//               className="mt-4 w-full bg-purple-600 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-purple-700"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { client } from "../sanity";
import { urlFor } from "../imageUrl";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "hero"][0]`)
      .then(setHeroData)
      .catch(console.error);
  }, []);

  const handlepopupSubmit = () => {
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Email submitted:", email);
    setShowPopup(false);
    setEmail("");
  };

  if (!heroData) {
    return (
      <section className="py-16 flex px-6 justify-center bg-[#F5FCFF]">
        <p className="text-gray-500">Loading hero section...</p>
      </section>
    );
  }

  return (
    <section className="py-16 flex flex-col-reverse lg:flex-row px-6 items-center bg-[#F5FCFF]">
      <div className="flex-1 text-center lg:text-left">
        <p className="text-gray-600">{heroData.introText}</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          {heroData.heading}{" "}
          <span className="text-purple-600">{heroData.highlightedText}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-gray-500">{heroData.description}</p>
        <button
          onClick={() => setShowPopup(true)}
          className="mt-6 bg-purple-600 text-white px-6 py-2 cursor-pointer rounded hover:bg-purple-700"
        >
          {heroData.buttonText}
        </button>
      </div>

      {heroData.profileImage && (
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src={urlFor(heroData.profileImage).width(400).url()}
            alt="Hero Profile"
            className="mx-auto h-auto"
          />
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 hover:bg-amber-400 rounded-full w-6 h-6 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {heroData.popupTitle || "Enter your Email"}
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={heroData.popupPlaceholder || "example@email.com"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handlepopupSubmit}
              className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              {heroData.popupSubmitText || "Submit"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
