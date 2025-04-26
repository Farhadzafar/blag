import BlogCard from "@/components/Blogs/blogCard";
import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section styles=" h-full">
      <div className="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {[
          1,
          2,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          33,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          ,
          33,
          3,
        ].map((item) => (
          <BlogCard key={item} />
        ))}
      </div>
    </Section>
  );
}
