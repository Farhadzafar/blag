import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Blocks, Code2, Terminal } from "lucide-react";

import image1 from "@/public/images/blogs/18.jpg";
import image2 from "@/public/images/blogs/2.jpg";
import image3 from "@/public/images/blogs/3.jpg";
import BlogCard from "../Blogs/blogCard";

export default function FeaturesBlog() {
  return (
    <>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Featured Articles
        </span>
        <h2 className="font-heading text-xl leading-[1.1]  md:text-4xl">
          Latest Articles
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our latest tutorials and insights about web development.
        </p>
      </div>
      <div className=" grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((itme) => (
          <BlogCard key={itme} />
        ))}
      </div>
    </>
  );
}
