// "use client";

// import { RenderBuilderContent } from "@/components/builder";
// import { useIsPreviewing } from "@builder.io/react";
// import PostHeader from "./PostHeader";
// import { DeepPartial, Post, useLivePost } from "@/data/posts";

// export type PostPageProps = {
//   slug: string;
//   initialPost: DeepPartial<Post> | undefined;
// };

// export default function PostPage({ slug, initialPost }: PostPageProps) {
//   const isPreviewing = useIsPreviewing();
//   const post = useLivePost({ slug, initialPost, isPreviewing });

//   if (!post && !isPreviewing) {
//     return <p className="text-center py-10">Post not found.</p>;
//   }

//   if (!post) {
//     return null;
//   }

//   return (
//     <article className="max-w-3xl mx-auto px-4 py-10">
//       <PostHeader
//         title={post.title || ""}
//         image={post.coverImage || ""}
//         excerpt={post.excerpt || ""}
//         author={post.author}
//         tag={post.tags?.[0] || ("" as any)}
//         likes={0}
//       />

//       {/* Drag-and-drop content area */}
//       <div className="prose prose-lg mt-6">
//         <RenderBuilderContent content={post as any} model="post-content" />
//       </div>
//     </article>
//   );
// }
