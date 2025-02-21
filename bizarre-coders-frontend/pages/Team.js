// const teamMembers = [
//   {
//     name: "Aryan Sharma",
//     role: "Web3 Developer",
//     imageUrl:
//       "https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },

//   {
//     name: "Agrim Sharma",
//     role: "Web3 Developer",
//     imageUrl:
//       "https://pbs.twimg.com/profile_images/1680581167152766976/Qd-I7IwH_400x400.jpg",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Kamal Nayan",
//     role: "Competitive Programmer",
//     imageUrl:
//       "https://pbs.twimg.com/profile_images/1689258076505796608/Nfw0ChmW_400x400.jpg",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Mehak",
//     role: "Competitive Programmer",
//     imageUrl:
//       "https://media.licdn.com/dms/image/D4D03AQEacowKlm_tHw/profile-displayphoto-shrink_400_400/0/1693029196516?e=1701302400&v=beta&t=fChe4GhnAg2MAwh6FANyuu1KxJuVIGwHyd0LoUTlqD4",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Simar",
//     role: "Competitive Programmer",
//     imageUrl:
//       "https://media.licdn.com/dms/image/C4E03AQG8hOqxHa6XUQ/profile-displayphoto-shrink_800_800/0/1659033679631?e=1701302400&v=beta&t=xZLpdvLh9cKKPazMUvyfJ-Dn8yH9VbdMFUvbZCFeOgQ",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Suraj",
//     role: "Competitive Programmer",
//     imageUrl:
//       "https://media.licdn.com/dms/image/D4D03AQHaHSjkdrcEXw/profile-displayphoto-shrink_800_800/0/1685732362477?e=1701302400&v=beta&t=D7wqftbAB3ncRouYuQTE7SXzsww1hZvYYtpRewRiyr0",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },

//   // More people...
// ];

// function scrollPageUp() {
//   window.scrollTo({ top: 0, behavior: "fast" });
// }
// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
//         <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
//           <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
//             <h2 className="text-4xl text-red-500 tracking-tight sm:text-4xl">
//               <i>Our Core Team Members</i>
//             </h2>
//             {/* <AnimateOnChange>Brilliantnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</AnimateOnChange> */}
//             <p className="text-xl text-gray-500"> vv</p>
//           </div>
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className="max-w-sm rounded overflow-hidden shadow-lg m-4"
//             >
//               <img
//                 className="w-full"
//                 src={`https://placekitten.com/400/200?image=${member.id}`}
//                 alt={member.name}
//               />
//               <div className="px-6 py-4">
//                 {/* <div className="font-bold text-xl mb-2">{member.name}</div> */}
//                 <p className="text-gray-700 text-base">{member.role}</p>
//               </div>
//               <ul role="list" className="flex space-x-5">
//                 <li>
//                   <a
//                     href={teamMembers.twitterUrl}
//                     className="text-gray-400 hover:text-gray-500"
//                   >
//                     <span className="sr-only">Twitter</span>
//                     <svg
//                       className="h-5 w-5"
//                       aria-hidden="true"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           ))}

//           <button
//             className="pl-2 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full shadow-md sticky"
//             onClick={scrollPageUp}
//           >
//             Scroll Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


const teamMembers = [
  {
    name: "Aryan Sharma",
    role: "Web3 Developer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Agrim Sharma",
    role: "Web3 Developer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1680581167152766976/Qd-I7IwH_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kamal Nayan",
    role: "Competitive Programmer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1689258076505796608/Nfw0ChmW_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mehak",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQEacowKlm_tHw/profile-displayphoto-shrink_400_400/0/1693029196516?e=1701302400&v=beta&t=fChe4GhnAg2MAwh6FANyuu1KxJuVIGwHyd0LoUTlqD4",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Simar",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQG8hOqxHa6XUQ/profile-displayphoto-shrink_800_800/0/1659033679631?e=1701302400&v=beta&t=xZLpdvLh9cKKPazMUvyfJ-Dn8yH9VbdMFUvbZCFeOgQ",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Suraj",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQHaHSjkdrcEXw/profile-displayphoto-shrink_800_800/0/1685732362477?e=1701302400&v=beta&t=D7wqftbAB3ncRouYuQTE7SXzsww1hZvYYtpRewRiyr0",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.twitterUrl} className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href={member.linkedinUrl} className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
