import React, { Suspense } from "react";
import { PLAYLIST_BY_SLUG_QUERY, STARTUP_BY_ID_QUERY } from "../../../../sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { startCardType } from "@/components/StartupCard";
import { Star } from "lucide-react";

export const experimental_ppr = true;
const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post,  { select: editorPosts } ] = await Promise.all([ 
    client.fetch(STARTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "editor-picks" })
  ]);

  // const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) {
    return notFound();
  }

  const parsedContent = md.render(post?.pitch || "");

  console.log("Editor Posts: ", editorPosts);

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag tag-tri"> {formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title} </h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">

        <Image
          src={post.image}
          alt="thumbnail"
          title="post image"
          width={1000}
          height={1000}
          className="w-full h-auto rounded object-cover"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto" >
          <div className="flex-between gap-5">
            <Link href={`/user/${post.author.id}`} className="flex gap-2 items-center mb-3" >
              <Image
                src={post.author.image}
                alt="author image"
                title="post author image"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium"> {post.author.name}</p>
                <p className="text-16-medium !text-black-300"> @{post.author.username}</p>
              </div>
            </Link>

            <p className="category-tag capitalize" >{post.category}</p>
          </div>

          {parsedContent ?  (
            <article 
                className="prose max-w-4xl font-work-sans break-all"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result" >No Details Provided</p>
          )
          }
        </div>
        <hr className="divider" />

        { editorPosts && editorPosts.length > 0 && (
          <div className="max-w-4xl mx-auto">
              <p className="text-30-semibold">Editor Picks</p>
              <ul className="mt-7 card_grid-sm">
                {editorPosts.map((post: startCardType) => (
                 <StartupCard key={post._id} post={post} />
                ))}
              </ul>
          </div>
        )   
        }

        <Suspense fallback={<Skeleton className="view_skeleton"  />} >
            <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
