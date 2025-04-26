// app/resources/page.tsx
import fs from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ResourcesCard from "@/components/resources/resourcesCard";
import Section from "@/components/ui/section";

type ResourceItem = {
  name: string;
  url: string;
  image: string;
  description: string;
  free: boolean;
};

const ResourceCard = ({ item }: { item: ResourceItem }) => (
  <Card className="px-4 py-6 border shadow-md hover:shadow-blue-400/40 dark:border-blue-600/50 rounded-lg transition-transform hover:scale-[1.01] duration-200 ease-in-out">
    <div className="py-2 rounded-md w-[60px]">
      <Image
        src={item.image}
        alt={item.name}
        width={60}
        height={60}
        className="object-cover object-center rounded-md"
      />
    </div>
    <CardContent className="space-y-2 p-4">
      <div className="flex items-start justify-start gap-2 w-full">
        <CardTitle>{item.name}</CardTitle>
        <span
          className={`mb-4 text-xs px-2 rounded-sm uppercase ${
            item.free ? "bg-green-600 text-white" : "bg-orange-600 text-white"
          }`}
        >
          {item.free ? "free" : "premium"}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </CardContent>
    <div className="px-4 pt-2">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
      >
        Get Started
        <ArrowRight className="w-4 group-hover:translate-x-2 transition" />
      </a>
    </div>
  </Card>
);

const Page = async () => {
  let resourcesData = null;
  let error = null;

  try {
    const filePath = path.join(process.cwd(), "public/data/resources.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const parsedData = JSON.parse(jsonData);
    resourcesData = parsedData.resources;
  } catch (err) {
    error = "Failed to load resources. Please try again later.";
    console.error("Error fetching resources:", err);
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-xl mt-10 font-semibold">
        {error}
      </div>
    );
  }

  if (!Array.isArray(resourcesData)) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <p className="font-semibold text-2xl text-red-600">
          Invalid data format. Please check the resources file.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4 py-16">
        <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-1.5 text-sm font-medium">
          Developer Toolbox
        </span>
        <h1 className="text-4xl font-bold sm:text-5xl">
          The Ultimate{" "}
          <span className="gradient-text">Collection of Web Dev Resources</span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl">
          Explore carefully curated tools, libraries, and inspiration to
          supercharge your web development journey.
        </p>
      </section>

      {/* RESOURCES SECTION */}
      <div>
        {resourcesData.map((category, index) => (
          <Section
            key={category.category}
            py="py-14"
            bgColor={
              index % 2 === 0 ? " bg-blue-300/10 dark:bg-slate-900/50" : ""
            }
          >
            <div className="my-4">
              <h2 className="text-3xl font-semibold text-left border-l-8 pl-2 border-blue-500 dark:border-blue-400  ">
                {category.category}
              </h2>
              <p className="text-muted-foreground text-lg mt-2">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item: ResourceItem) => (
                <ResourcesCard key={item.name} item={item} />
              ))}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Page;
