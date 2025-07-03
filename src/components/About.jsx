// import React from "react";
// import aboutImage from "../assets/About_Me.png";

// export default function About() {
//   return (
//     <section className="py-16 px-6 bg-white flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
//       <div className="flex-1">
//         <img
//           src={aboutImage}
//           alt="About"
//           className="rounded-lg w-full max-w-sm mx-auto"
//         />
//       </div>
//       <div className="flex-1 text-center lg:text-left">
//         <h2 className="text-3xl font-semibold mb-4">About Me</h2>
//         <p className="text-gray-600 mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
//           faucibus massa sollicitudin amet augue. Nibh metus a semper purus
//           mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
//           adipiscing velit non nulla in pellentesque.
//         </p>
//         <p className="text-gray-600">
//           Sit turpis pretium eget maecenas. Vestibulum dolor bibendum
//           consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
//           mi a euismod risus.
//         </p>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { client } from "../sanity";
import { urlFor } from "../imageUrl";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "about"][0]`)
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);

  if (!aboutData) return null;

  return (
    <section className="py-16 px-6 bg-white flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
      <div className="flex-1">
        <img
          src={urlFor(aboutData.image).url()}
          alt="About"
          className="rounded-lg w-full max-w-sm mx-auto"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-4">{aboutData.heading}</h2>
        <p className="text-gray-600 mb-4">{aboutData.paragraph1}</p>
        <p className="text-gray-600">{aboutData.paragraph2}</p>
      </div>
    </section>
  );
}
