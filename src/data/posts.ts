import { builder } from "@builder.io/sdk";
import { useQuery } from "@tanstack/react-query";

builder.init("b30935ed1b4247d2a9ae9ba92e629104");

export type Variant = 'yellow' | 'blue' | 'orange'

export interface Post {
    title: string;
    excerpt?: string;
    slug: string;
    tags?: string[];
    coverImage?: string;
    publishedDate?: string;
    author?: any;
    variant?: Variant
}

export async function fetchPosts({
  limit = 12,
  skip = 0,
  search = "",
  tags = [],
}: {
  limit?: number;
  skip?: number;
  search?: string;
  tags?: string[];
}){
  const query: any = {};

  if (search) {
    query.$or = [
      { "data.title": { $regex: search, $options: "i" } },
      { "data.excerpt": { $regex: search, $options: "i" } },
      { "data.tags": { $in: [search] } },
    ];
  }

  if (tags.length > 0) {
    query["data.tags"] = { $in: tags };
  }

  const results = await builder.getAll("post", {
    options: {
      limit,
      skip,
      query,
      sort: { "data.publishedDate": -1 },
    },
  });

  console.log("Builder posts:", results);

  return results;
}


export async function getLivePost(
  slug: string,
): Promise<DeepPartial<Post> | undefined> {
  return await builder.get('post', {
    includeUnpublished: true,
    prerender: false,
    query: {
      'data.slug': slug,
    },
  })
}

export type DeepPartial<T> =
  T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T


export function useLivePost({
  slug,
  initialPost,
  isPreviewing,
}: {
  slug: string
  initialPost: DeepPartial<Post> | undefined
  isPreviewing: boolean
}): DeepPartial<Post> | undefined {
  const { data: post } = useQuery({
    initialData: initialPost,
    queryKey: ['livePost', slug],
    queryFn: () => getLivePost(slug),
    refetchInterval: 2000,
    enabled: isPreviewing,
  })

  return post
}