"use client";
import {X} from "lucide-react";
import Link from "next/link";

import React from "react";

const SearchFormReset = () => {
  const resetQuery = () => {
    const form = document.querySelector(".search_form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };
  return (
    <button title="reset" type="reset" onClick={resetQuery}>
      <Link href="/" className="search_btn text-white"  > 
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
