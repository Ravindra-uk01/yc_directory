import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
// import 

export type startCardType = Omit<Startup, "author"> & { author ?: Author };

const StartupCard = ({ post }: { post: startCardType }) => {

    const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;


  return (
    <li className="startup_card">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3  className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || "/profile.png"}
            alt="author"
            className=" rounded-full object-cover"
            width={48}
            height={48}
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup_card_desc" >
          {description && description.length > 100
            ? `${description?.slice(0, 100)}...`
            : description}
        </p>
      </Link>
      <img
        src={image}
        alt="post image"
        className="startup_card_img"
        loading="lazy"
      />

      <div className="flex-between gap-3 mt-5">
        <Link href={`?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium" >{category}</p>
        </Link>
        <Button className="startup_card_btn" asChild >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
