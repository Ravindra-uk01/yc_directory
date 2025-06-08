import React, { Suspense } from "react";
import { STARTUP_BY_ID_QUERY } from "../../../../sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true;
const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // const {data: post } = await sanityFetch({query: STARTUP_BY_ID_QUERY, params: {id}});

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) {
    return notFound();
  }

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag tag-tri"> {formatDate(post._createdAt)}</p>
        <h1 className="heading">{post.title} </h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        {/* <img src={post.image} alt='thumbnail' className='w-full h-auto rounded' title="post image" /> */}

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

        <Suspense fallback={<Skeleton className="view_skeleton"  />} >
            <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
