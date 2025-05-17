import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export default function ProjectCard() {
  return (
    <Card className="w-full max-w-md overflow-hidden group shadow-ms hover:shadow-lg shadow-blue-400/50 dark:shadow-blue-400/20 hover:shadow-blue-400/50 hover:dark:shadow-blue-400/20 dark:border-blue-600/50 rounded-lg transition-transform hover:scale-[1.01] duration-200 ease-in-out">
      <div className="overflow-hidden relative">
        <img
          src="/images/project/project.png"
          alt="Project Image"
          className="w-full h-48 object-cover  transition-transform group-hover:scale-[1.1] duration-200 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent>
        <CardTitle className="font-semibold mb-2 group-hover:text-blue-500 transition-colors mt-8">
          Dashboard Analytics
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-3">
          Real-time analytics dashboard with interactive data visualization,
          custom reporting, and predictive analytics.
        </p>
        <ul className="flex items-center justify-start space-x-2 mt-5 flex-nowrap">
          <li className="text-primary bg-primary/10 text-sm px-3 py-1 dark:bg-black/80 border rounded-full whitespace-nowrap">
            React.js
          </li>
          <li className="text-primary bg-primary/10 text-sm px-3 py-1 dark:bg-black/80 border rounded-full whitespace-nowrap ">
            Tailwind css
          </li>
          <li className="text-primary bg-primary/10 text-sm px-3 py-1 dark:bg-black/80 border rounded-full whitespace-nowrap">
            Node.js
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Link
          href="projects/id"
          className="text-sm text-primary hover:text-blue-900  flex items-center gap-1 hover:-translate-y-1 transition-transform duration-200 ease-in-out"
        >
          View Details <ExternalLinkIcon className="w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
