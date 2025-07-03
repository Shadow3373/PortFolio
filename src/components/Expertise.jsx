// const skills = [
//   {
//     title: "Strategy & Direction",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "📈",
//   },
//   {
//     title: "Branding & Logo",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "🎨",
//   },
//   {
//     title: "UI & UX Design",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "🧩",
//   },
//   {
//     title: "Webflow Development",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "</>",
//   },
// ];

// export default function Expertise() {
//   return (
//     <section className="py-16 px-6 bg-white">
//       <h5 className="text-base md:font-semibold text-start mb-5">My Skills</h5>
//       <h2 className="text-3xl font-semibold text-start mb-12">My Expertise</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-sm bg-[#F5FCFF] justify-center flex flex-col items-center p-6 border-b-6 border-transparent hover:scale-105 hover:border-b-6 cursor-pointer rounded-b-lg hover:border-[#5E3BEE] text-center hover:shadow-md transition"
//           >
//             <div className="text-3xl rounded-lg p-2 mb-4 w-fit h-fit bg-red-700">{skill.icon}</div>
//             <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
//             <p className="text-gray-500 text-sm">{skill.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { client } from "../sanity";

export default function Expertise() {
  const [expertiseData, setExpertiseData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "expertise"][0]`)
      .then((data) => setExpertiseData(data))
      .catch(console.error);
  }, []);

  if (!expertiseData) return <p className="px-6">Loading...</p>;

  return (
    <section className="py-16 px-6 bg-white">
      <h5 className="text-base md:font-semibold text-start mb-5">
        {expertiseData.sectionTitle}
      </h5>
      <h2 className="text-3xl font-semibold text-start mb-12">
        {expertiseData.sectionSubtitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {expertiseData.skills?.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg shadow-sm bg-[#F5FCFF] justify-center flex flex-col items-center p-6 border-b-6 border-transparent hover:scale-105 hover:border-b-6 cursor-pointer rounded-b-lg hover:border-[#5E3BEE] text-center hover:shadow-md transition"
          >
            <div className="text-3xl rounded-lg p-2 mb-4 w-fit h-fit bg-red-700 text-white">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
            <p className="text-gray-500 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
