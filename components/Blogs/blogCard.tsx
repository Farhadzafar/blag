import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Code2 } from "lucide-react";

import image4 from "@/public/images/blogs/5.jpg";
import { Button } from "../ui/button";

export default function BlogCard() {
  return (
    <Card className="group relative overflow-hidden rounded-xl border bg-card p-2 card-hover shadow-lg hover:shadow-xl my-2">
      <CardHeader className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={image4}
          alt="Next.js Development"
          fill
          quality={10}
          className="object-cover object-center transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 text-white">
            <Code2 className="h-4 w-4" />
            <span className="text-sm">Next.js</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex min-h-[100px] flex-col justify-between p-6">
        <CardTitle>Getting Started with Next.js</CardTitle>
        <CardDescription className="text-sm text-muted-foreground p-3">
          Learn how to build modern web applications with Next.js 14 and its
          powerful features.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full rounded-full">
          Read Article
        </Button>
      </CardFooter>
    </Card>
  );
}
