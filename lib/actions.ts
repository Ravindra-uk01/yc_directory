"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await auth();
  if (!session) {
    return parseServerActionResponse({
      error: "You must be logged in to create a pitch.",
      status: "ERROR",
    });
  }

   const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch"),
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      pitch,
      author: {
        _type: "reference",
        _ref: session?.id,
      },
    };

    const result = await writeClient.create({_type: "startup", ...startup});
    return parseServerActionResponse({
        ...result,
        message: "Pitch created successfully!",
        error : "",
        status: "SUCCESS",
        
    })
  } catch (error) {
    console.error("Error creating pitch:", error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }

};
