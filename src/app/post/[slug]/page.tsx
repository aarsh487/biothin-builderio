import React from "react";
import { builder } from "@builder.io/sdk";
import PostHeader from "@/components/PostPage/PostHeader";
import { RenderBuilderContent } from "@/components/builder";
import { Metadata } from "next";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function generateStaticParams () {
  const pages = await builder.getAll("post-content", {
    options: { noTargeting: true }
  });

  return pages.map((page) => ({
    page: page.data?.url?.split("/").filter(Boolean) || []
  }))
}

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { page } = await props.params; 
  const urlPath = '/' + (page?.join('/') || '');

  const content = await builder.get('page', {
    userAttributes: { urlPath },
    prerender: false,
  });

  const metadata: Metadata = {
    title: content?.data?.title || 'Default title',
    description: content?.data?.description || 'Default description',
    openGraph: {
      images: [content?.data?.metaImage],
    },
  };
  return metadata;
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