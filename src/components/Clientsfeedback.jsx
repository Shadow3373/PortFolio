// import React from "react";
// import { FaStar } from "react-icons/fa6";
// import avatar from "../assets/Avatar_image.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const testimonials = [
//   {
//     name: "Dianne Russell",
//     company: "Starbucks",
//     feedback:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores tempore rem optio dolor corporis.",
//     image: avatar,
//   },
//   {
//     name: "Jerome Bell",
//     company: "Google",
//     feedback:
//       "Great service and support. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     image: avatar,
//   },
//   {
//     name: "Kristin Watson",
//     company: "Amazon",
//     feedback:
//       "Highly recommend! Their professionalism stood out. Lorem ipsum dolor sit amet.",
//     image: avatar,
//   },
// ];

// const ClientsFeedback = () => {
//   return (
//     <section className="w-full bg-[#F5FCFF] p-10 pb-20">
//       <h5 className="text-base font-semibold mb-4">Clients Feedback</h5>
//       <h2 className="text-2xl font-bold">Customer testimonials</h2>

//       {/* Mobile View: Swiper Slider */}
//       <div className="block md:hidden mt-6">
//         <Swiper spaceBetween={15} slidesPerView={1} width={300}>
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white max-w-md rounded-2xl border border-[#006B6A] flex flex-col gap-5 p-4">
//                 <div className="text-[#006B6A] flex space-x-0.5">
//                   {Array(5)
//                     .fill(0)
//                     .map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                 </div>
//                 <p className="text-[#1C1E53]">{item.feedback}</p>
//                 <div className="flex gap-3 items-center">
//                   <img
//                     className="rounded-full object-cover"
//                     width={50}
//                     height={50}
//                     src={item.image}
//                     alt="Client Avatar"
//                   />
//                   <span>
//                     <h4 className="text-[#282938]">{item.name}</h4>
//                     <p className="text-[#1C1E53]">{item.company}</p>
//                   </span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop View: Grid */}
//       <div className="hidden md:flex gap-5 mt-6">
//         {testimonials.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white max-w-md rounded-2xl flex-1 border border-[#006B6A] flex flex-col gap-5 p-4"
//           >
//             <div className="text-red-600 flex space-x-0.5">
//               {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//             </div>
//             <p className="text-[#1C1E53]">{item.feedback}</p>
//             <div className="flex gap-3 items-center">
//               <img
//                 className="rounded-full object-cover"
//                 width={50}
//                 height={50}
//                 src={item.image}
//                 alt="Client Avatar"
//               />
//               <span>
//                 <h4 className="text-[#282938]">{item.name}</h4>
//                 <p className="text-[#1C1E53]">{item.company}</p>
//               </span>
//             </div>
//             </div>
            
            
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientsFeedback;

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { client } from "../sanity";
import { urlFor } from "../imageUrl";

export default function ClientsFeedback() {
  const [data, setData] = useState(null); // initially null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "clientsfeedbackSection"][0]{
          sectionTitle,
          sectionSubtitle,
          testimonials[]{
            _key,
            name,
            company,
            feedback,
            image,
            rating
          }
        }`
      )
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading || !data) return null; // or show a loader/spinner

  const { sectionTitle, sectionSubtitle, testimonials } = data;

  return (
    <section className="w-full bg-[#F5FCFF] p-10 pb-20">
      <h5 className="text-base font-semibold mb-4">{sectionTitle}</h5>
      <h2 className="text-2xl font-bold">{sectionSubtitle}</h2>

      {/* Mobile View */}
      <div className="block md:hidden mt-6">
        <Swiper spaceBetween={15} slidesPerView={1} width={300}>
          {testimonials.map((item) => (
            <SwiperSlide key={item._key}>
              <div className="bg-white max-w-md rounded-2xl border border-[#006B6A] flex flex-col gap-5 p-4">
                <div className="text-red-600 flex space-x-0.5">
                  {Array(item.rating || 0)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-[#1C1E53]">{item.feedback}</p>
                <div className="flex gap-3 items-center">
                  <img
                    className="rounded-full object-cover"
                    width={50}
                    height={50}
                    src={urlFor(item.image).url()}
                    alt={item.name}
                  />
                  <span>
                    <h4 className="text-[#282938]">{item.name}</h4>
                    <p className="text-[#1C1E53]">{item.company}</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex gap-5 mt-6">
        {testimonials.map((item) => (
          <div
            key={item._key}
            className="bg-white max-w-md rounded-2xl flex-1 border border-[#006B6A] flex flex-col gap-5 p-4"
          >
            <div className="text-red-600 flex space-x-0.5">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-[#1C1E53]">{item.feedback}</p>
            <div className="flex gap-3 items-center">
              <img
                className="rounded-full object-cover"
                width={50}
                height={50}
                src={urlFor(item.image).url()}
                alt={item.name}
              />
              <span>
                <h4 className="text-[#282938]">{item.name}</h4>
                <p className="text-[#1C1E53]">{item.company}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

