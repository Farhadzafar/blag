import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";

type itemInterface = {
  name: string;
  url: string;
  image: string;
  description: string;
  free: boolean;
};

export default function ResourcesCard({ item }: { item: itemInterface }) {
  return (
    <Card className=" px-4 py-6 border  shadow-lg hover:shadow-blue-400/50 dark:hover:shadow-blue-400/20 dark:border-blue-600/50 rounded-lg transition-transform hover:scale-[1.01] duration-200 ease-in-out">
      <div className=" py-2 rounded-md w-[60px] ">
        <Image
          src={item.image}
          alt={item.name}
          width={60}
          height={60}
          className=" object-cover object-center rounded-md"
        />
      </div>

      <CardContent className="space-y-2 p-4 ">
        <div className=" flex items-start justify-start gap-2 w-full">
          <CardTitle>{item.name}</CardTitle>
          <span
            className={`mb-4 text-xs ${
              item.free ? "bg-green-400" : " bg-orange-600"
            } px-2 rounded-sm uppercase text-white `}
          >
            {item.free ? "Free" : "premium"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <div className="px-4 pt-2 w-auto">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-800 flex items-center gap-1 group"
        >
          Get Started{" "}
          <ArrowRight className=" w-5 group-hover:translate-x-2 transition " />
        </a>
      </div>
    </Card>
  );
}
