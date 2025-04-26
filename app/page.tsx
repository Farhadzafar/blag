import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Layout,
  Terminal,
  Blocks,
  Laptop,
  CheckCircle2,
  Sparkles,
  Book,
  Video,
  FileText,
  Github,
  Globe,
  Bookmark,
  MonitorPlay,
  FileCode2,
  Lightbulb,
} from "lucide-react";
import Hero from "@/components/Home/hero";
import Section from "@/components/ui/section";
import FeaturesBlog from "@/components/Home/featuresBlog";
import ResourcesCard from "@/components/resources/resourcesCard";

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
      <Section bgColor={" bg-blue-300/10 dark:bg-slate-900/50"}>
        <div className="mx-auto  flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Developer Resources
          </span>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
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

      {/* <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Learn at Your Pace
          </span>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Featured Tutorials
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Start your journey with our comprehensive tutorials
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[
            {
              icon: Book,
              title: "Next.js Fundamentals",
              description:
                "Learn the basics of Next.js and server-side rendering",
              level: "Beginner",
              duration: "2 hours",
            },
            {
              icon: Video,
              title: "React Performance",
              description:
                "Optimize your React applications for better performance",
              level: "Advanced",
              duration: "3 hours",
            },
            {
              icon: FileText,
              title: "TypeScript Deep Dive",
              description: "Master TypeScript for large-scale applications",
              level: "Intermediate",
              duration: "4 hours",
            },
          ].map((tutorial, index) => (
            <div key={index} className="tutorial-card group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <tutorial.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{tutorial.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {tutorial.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  {tutorial.level}
                </span>
                <span className="flex items-center gap-1">
                  <MonitorPlay className="h-4 w-4" />
                  {tutorial.duration}
                </span>
              </div>
              <Button className="mt-6 w-full rounded-full" variant="secondary">
                Start Learning
              </Button>
            </div>
          ))}
        </div>
      </section> */}

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Developer Resources
          </span>
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Helpful Resources
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to accelerate your development workflow
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[
            {
              icon: Github,
              title: "Starter Templates",
              description:
                "Ready-to-use project templates for various tech stacks",
            },
            {
              icon: FileCode2,
              title: "Code Snippets",
              description: "Useful code snippets for common development tasks",
            },
            {
              icon: Globe,
              title: "API References",
              description: "Comprehensive API documentation and examples",
            },
            {
              icon: Bookmark,
              title: "Best Practices",
              description: "Industry-standard development guidelines",
            },
            {
              icon: Layout,
              title: "UI Components",
              description: "Collection of reusable UI components",
            },
            {
              icon: Lightbulb,
              title: "Tips & Tricks",
              description: "Helpful development tips from experts",
            },
          ].map((resource, index) => (
            <div key={index} className="resource-card group p-6">
              {/* <resource.icon className="resource-icon h-12 w-12" /> */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <resource.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{resource.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {resource.description}
              </p>
              <Button
                variant="ghost"
                className="group relative -ml-4 h-auto p-0 text-primary"
              >
                Learn more{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid max-w-[64rem] gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
              Learn Modern Web Development
            </h2>
            <p className="text-muted-foreground">
              Join our community of developers and get access to:
            </p>
            <ul className="grid gap-4">
              {[
                {
                  title: "In-depth Tutorials",
                  description: "Step-by-step guides on modern web technologies",
                  icon: Layout,
                },
                {
                  title: "Best Practices",
                  description: "Learn industry-standard development practices",
                  icon: Code2,
                },
                {
                  title: "Real-world Projects",
                  description: "Build production-ready applications",
                  icon: Laptop,
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=1000&auto=format&fit=crop"
                alt="Developer workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-background/95 p-4 backdrop-blur">
                  <h4 className="mb-2 text-lg font-semibold">
                    Join 50,000+ developers
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Free tutorials",
                      "Community support",
                      "Regular updates",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Newsletter
            </span>
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Stay Updated
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Subscribe to our newsletter for the latest web development
              tutorials and tips.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-12 w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="lg" className="rounded-full">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
