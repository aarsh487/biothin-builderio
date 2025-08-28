import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { Metadata } from "next";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
  });

  return pages.map((page) => ({
    page: page.data?.url?.split("/").filter(Boolean) || [],
  }));
}

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { page } = await props.params; 
  const urlPath = '/' + (page?.join('/') || '')

  const content = await builder.get('page', {
    userAttributes: { urlPath },
    prerender: false,
  })

  return {
    title: content?.data?.metaTitle || 'Default title',
    description: content?.data?.metaDescription || 'Default description',
    openGraph: {
      images: [content?.data?.metaImage],
    },
  }
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const { page } = await props.params; 

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}