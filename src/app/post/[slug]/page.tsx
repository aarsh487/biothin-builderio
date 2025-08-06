import React from "react";
import { builder } from "@builder.io/sdk";
import PostHeader from "@/components/PostPage/Header/PostHeader";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}


export default async function Page(props: PageProps) {
  const params = await props.params
  const content = await builder
    .get("post-content", {
      userAttributes: {
        urlPath: "/post" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

    const { title, image, excerpt, author, tag, likes } = content.data;
    console.log('content.data:', content?.data);

  return (
    <>
      <PostHeader
        title={title}
        image={image}
        excerpt={excerpt}
        author={author}
        tag={tag}
        likes={likes}
      />
      <RenderBuilderContent content={content} model="post-content" />
    </>
  );
}