// import Image from "next/image";
// import { Card, CardContent } from "../ui/card";
// import { Heart, Share2 } from "lucide-react";
// import Link from "next/link";
// import { Post } from "@/data/posts";

// interface RelatedPostsProps {
//   posts?: {
//     post?: {
//       data?: Post;
//     };
//   }[];
// }

// export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts = [] }) => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-12">
//       <h2 className="text-2xl font-bold mb-8 text-orange-color">
//         ANDERE STIMMEN ZU DIESEM THEMA.
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {posts.map((wrapper, idx) => {
//           const post = wrapper?.post?.data;
//           if (!post) return null;

//           const tag = post.tags?.[0];
//           const bgColor = tag?.color || "#F9C342";
//           const author = post.author ?? {
//             name: "Caro",
//             role: "Anwenderin",
//             avatar: "",
//           };
//           const avatarLetter = author.name.charAt(0).toUpperCase();

//           return (
//             <Card
//               key={idx}
//               className="overflow-hidden shadow-sm hover:shadow-md transition hover:-translate-y-0.5 border border-gray-200"
//             >
//               {/* Image */}
//               <div className="relative w-full aspect-[8/7]">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover object-top block"
//                   priority={idx < 2}
//                 />
//               </div>

//               {/* Card content */}
//               <div style={{ backgroundColor: bgColor }}>
//                 <CardContent className="px-4 py-4 text-gray-900 flex flex-col justify-between">
//                   {/* Author */}
//                   <div className="flex items-center gap-3 text-sm mb-3">
//                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-secondary">
//                       {avatarLetter}
//                     </div>
//                     <div>
//                       <div className="font-medium underline">{author.name}</div>
//                       <div className="text-[#565655] underline">{author.role}</div>
//                       {tag?.tag && (
//                         <Link
//                           href={`/category/${tag.tag.toLowerCase()}`}
//                           className="underline text-info"
//                         >
//                           {tag.tag}
//                         </Link>
//                       )}
//                     </div>
//                   </div>

//                   {/* Excerpt */}
//                   <p className="text-sm mb-3 line-clamp-3">{post.excerpt}</p>

//                   {/* Footer */}
//                   <div className="flex justify-between items-center text-sm">
//                     <div className="flex items-center gap-3">
//                       <Heart size={16} />
//                       <Share2 size={16} />
//                     </div>
//                     <Link
//                       href={`/post/${post.slug}`}
//                       className="underline font-semibold text-info hover:text-info/70"
//                     >
//                       weiterlesen
//                     </Link>
//                   </div>
//                 </CardContent>
//               </div>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
