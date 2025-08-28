"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/data/posts";
import { PostCard } from "./postCard";
import { SearchIcon } from "lucide-react";

export function PostList({ pageSize = 9 }: { pageSize?: number }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("Alle");

  const { data: allPosts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts({ limit: 100 }), 
    staleTime: 1000 * 60 * 5,
  });

  const tags = useMemo(() => {
    if (!allPosts) return ["Alle"];
    const tagSet = new Set<string>();
    allPosts.forEach((post) => {
      post.data?.tags?.forEach((tag: any) => {
        if (typeof tag === "string") tagSet.add(tag);
        else if (tag?.tag) tagSet.add(tag.tag);
      });
    });
    return ["Alle", ...Array.from(tagSet)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    if (!allPosts) return [];
    return allPosts.filter((post) => {
      const title = post.data?.title?.toLowerCase() || "";
      const excerpt = post.data?.excerpt?.toLowerCase() || "";
      const postTags = post.data?.tags || [];

      const matchesSearch =
        !search ||
        title.includes(search.toLowerCase()) ||
        excerpt.includes(search.toLowerCase());

      const matchesTag =
        selectedTag === "Alle"
          ? true
          : postTags.some((t: any) =>
              typeof t === "string" ? t === selectedTag : t.tag === selectedTag
            );

      return matchesSearch && matchesTag;
    });
  }, [allPosts, search, selectedTag]);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredPosts.slice(start, start + pageSize);
  }, [filteredPosts, page, pageSize]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 px-20">
      <div className="relative">
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
          <SearchIcon fill="none" stroke="#F59C00" />
        </div>

        <input
          type="text"
          placeholder="Thema suchen..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-full border-b-2 border-b-yellow-400 px-12 py-3 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => {
              setPage(1);
              setSelectedTag(tag);
            }}
            className={`rounded-full px-3 py-1 text-sm border ${
              selectedTag === tag
                ? "bg-yellow-400 text-black"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {paginatedPosts.map((post, idx) =>
          post.data ? (
            <PostCard
              key={idx}
              image={post.data.coverImage}
              author={post.data.author?.name || "Unbekannt"}
              role={post.data.author?.organization || "Anwenderin"}
              title={post.data.title}
              likes={post.data.likes || 0}
              slug={post.data.slug}
              variant={post.data.variant}
            />
          ) : null
        )}
      </div>

      {paginatedPosts.length < filteredPosts.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded bg-yellow-400 px-4 py-2 font-semibold"
          >
            Mehr laden
          </button>
        </div>
      )}
    </div>
  );
}
