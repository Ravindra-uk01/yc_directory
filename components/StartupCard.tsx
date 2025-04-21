import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: startCardType }) => {
  return (
    <li className="startup_card">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author.name}</p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3  className="text-26-semibold line-clamp-1">{post.title}</h3>
          </Link>
        </div>

        <Link href={`/user/${post.author._id}`}>
          <Image
            src={post.author.image}
            alt="author"
            className=" rounded-full object-cover"
            width={48}
            height={48}
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup_card_desc" >
          {post.description.length > 100
            ? `${post.description.slice(0, 100)}...`
            : post.description}
        </p>
      </Link>
      <img
        src={post.image}
        alt="post image"
        className="startup_card_img"
        loading="lazy"
      />

      <div className="flex-between gap-3 mt-5">
        <Link href={`query?category=${post.category.toLowerCase()}`}>
          <p className="text-16-medium" >{post.category}</p>
        </Link>
        <Button className="startup_card_btn" asChild >
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
