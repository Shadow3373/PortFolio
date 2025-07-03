// export default function Header() {
//   return (
//     <header className="w-full shadow-sm py-4 px-6 bg-white flex justify-between items-center">
//       <div className="font-bold font-custom text-2xl flex gap-2">
//         <img src="/logo.png" alt="logo" />
//         Manikandan N</div>
//       <nav className="hidden md:flex gap-6 text-sm text-gray-700">
//         <a href="#">Home</a>
//         <a href="#">Portfolio</a>
//         <a href="#">About me</a>
//         <a href="#">Testimonials</a>
//       </nav>
//       <button className="border px-4 py-2 text-sm text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white rounded">
//         Contact Me
//       </button>
//     </header>
//   );
// }

// Header.jsx
import React, { useEffect, useState } from "react";
import { client } from "../sanity"; // Your configured sanity client
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source); 
}

export default function Header() {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "header"][0]{
      logo,
      siteTitle,
      navLinks,
      buttonText,
      buttonLink
    }`;
    client.fetch(query).then((data) => setHeaderData(data));
  }, []);

  if (!headerData) return null;

  return (
    <header className="w-full shadow-sm py-4 px-6 bg-white flex justify-between items-center">
      <div className="font-bold font-custom text-2xl flex gap-2 items-center">
        {headerData.logo && (
          <img
            src={urlFor(headerData.logo).width(40).url()}
            alt="logo"
            className="w-8 h-8 object-contain"
          />
        )}
        {headerData.siteTitle}
      </div>

      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        {headerData.navLinks?.map((link, i) => (
          <a key={i} href={link.url}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={headerData.buttonLink}
        className="border px-4 py-2 text-sm text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white rounded"
      >
        {headerData.buttonText}
      </a>
    </header>
  );
}
