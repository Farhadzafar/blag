import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Layout,
  Laptop,
  CheckCircle2,
  Github,
  Globe,
  Bookmark,
  FileCode2,
  Lightbulb,
} from "lucide-react";
import Hero from "@/components/Home/hero";
import Section from "@/components/ui/section";
import FeaturesBlog from "@/components/Home/featuresBlog";
import ResourcesCard from "@/components/resources/resourcesCard";
import ProjctCard from "@/components/Projects/projctCard";

const resourcesData = [
  {
    name: "Colorhunt Palettes",
    description:
      "Don't know what colors to use for your website? Colorhunt helps you with beautiful color palettes.",
    url: "https://colorhunt.co/",
    image: "https://colorhunt.co/img/color-hunt-icon-192.png",
    free: true,
  },
  {
    name: "Next.js Starter Kit",
    url: "https://github.com/vercel/next.js/tree/canary/examples/with-typescript",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*W0fC854FAMD1EP60bnl2lg.png",
    description: "A starter kit for Next.js with TypeScript support.",
    free: true,
  },
  {
    name: "Videvo",
    description:
      "Another great resource for free stock videos and motion graphics.",
    url: "https://www.videvo.net",
    image: "https://www.videvo.net/favicon.ico",
    free: true,
  },
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    image:
      "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
    description: "A collection of UI components for React.",
    free: true,
  },
  {
    name: "Google Fonts",
    description:
      "The #1 resource for free and easy-to-use webfonts. Has a huge library of fonts.",
    url: "https://fonts.google.com/",
    image:
      "https://www.gstatic.com/images/branding/product/1x/google_fonts_512dp.png",
    free: true,
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
    image: "https://vercel.com/favicon.ico",
    description:
      "The platform for frontend developers, providing hosting and serverless functions.",
    free: true,
  },
];

export default function Home() {
  return (
    <>
      <Section styles="hero-pattern h-[90vh] flex items-center justify-center">
        <Hero />
      </Section>

      <Section>
        <FeaturesBlog />
      </Section>

      {/* Helpful Resources section */}
      <Section bgColor={" bg-blue-300/10 dark:bg-slate-900/50"}>
        <div className="mx-auto  flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Developer Resources
          </span>
          <h2 className="font-heading text-xl leading-[1.1]  md:text-4xl">
            Helpful Resources
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to accelerate your development workflow
          </p>
        </div>
        <div className=" mt-12 grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {resourcesData.map((item, index) => (
            <ResourcesCard key={index} item={item} />
          ))}
        </div>
      </Section>

      {/* Project Section */}
      <Section>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Open Source
          </span>
          <h2 className="font-heading text-xl leading-[1.1]  md:text-4xl">
            Open Source Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out our open source projects on GitHub
          </p>
        </div>
        <div className="mt-12 grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <ProjctCard />
          <ProjctCard />
          <ProjctCard />
        </div>
      </Section>
    </>
  );
}
