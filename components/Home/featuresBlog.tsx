import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Blocks, Code2, Terminal } from "lucide-react";

import image1 from "@/public/images/blogs/18.jpg";
import image2 from "@/public/images/blogs/2.jpg";
import image3 from "@/public/images/blogs/3.jpg";

export default function FeaturesBlog() {
  return (
    <>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Featured Articles
        </span>
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Latest Articles
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our latest tutorials and insights about web development.
        </p>
      </div>
      <div className=" grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3">
        <article className="group relative overflow-hidden rounded-xl border bg-card p-2 card-hover">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={image1}
              alt="Next.js Development"
              fill
              className="object-cover object-center transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 text-white">
                <Code2 className="h-4 w-4" />
                <span className="text-sm">Next.js</span>
              </div>
            </div>
          </div>
          <div className="flex h-[180px] flex-col justify-between p-6">
            <div className="space-y-2">
              <h3 className="font-bold text-xl">
                Getting Started with Next.js
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn how to build modern web applications with Next.js 14 and
                its powerful features.
              </p>
            </div>
            <Button variant="secondary" className="w-full rounded-full">
              Read Article
            </Button>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-xl border bg-card p-2 card-hover">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={image2}
              alt="React Development"
              fill
              className="object-cover object-center transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 text-white">
                <Blocks className="h-4 w-4" />
                <span className="text-sm">React</span>
              </div>
            </div>
          </div>
          <div className="flex h-[180px] flex-col justify-between p-6">
            <div className="space-y-2">
              <h3 className="font-bold text-xl">React Server Components</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into React Server Components and how they improve
                application.
              </p>
            </div>
            <Button variant="secondary" className="w-full rounded-full">
              Read Article
            </Button>
          </div>
        </article>

        <article className="group relative overflow-hidden rounded-xl border bg-card p-2 card-hover">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={image3}
              alt="TypeScript Development"
              fill
              className="object-cover object-center transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 text-white">
                <Terminal className="h-4 w-4" />
                <span className="text-sm">TypeScript</span>
              </div>
            </div>
          </div>
          <div className="flex h-[180px] flex-col justify-between p-6">
            <div className="space-y-2">
              <h3 className="font-bold text-xl">TypeScript Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                Essential TypeScript patterns and practices for modern web
                development.
              </p>
            </div>
            <Button variant="secondary" className="w-full rounded-full">
              Read Article
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}
