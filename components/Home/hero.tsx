import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className=" relative">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="rounded-2xl bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <span className="mr-2">🚀</span>
            Welcome to DevBlog
            <span className="ml-2">✨</span>
          </div>
          <div className="py-4 text-center w-full">
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Master Modern{" "}
              <span className="gradient-text">Web Development</span>
            </h1>
            <p className="max-w-[42rem] mx-auto leading-normal text-gray-200 sm:text-xl sm:leading-8 text-center">
              Dive deep into Next.js, React, and modern web development. Learn
              from experienced developers and stay up to date with the latest
              trends.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/blog">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/about">About Us</Link>
            </Button>
          </div>
          {/* <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8">
            {[
              { number: "500+", label: "Tutorials" },
              { number: "50K+", label: "Developers" },
              { number: "100+", label: "Contributors" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl px-4 py-3">
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
