import { Project } from "@/features/projects/types/project";

export const projects: Project[] = [
  {
    title: "Homemade Recipes",
    tags: ["React", "TypeScript", "vanilla-extract"],
    description:
      "An extension of @vanilla-extract/recipes that adds responsive variant utilities.",
    sourceCodeLink: "https://github.com/timkinsman/homemade-recipes",
  },
  {
    title: "@nayhoo/ui",
    tags: [
      "Radix Colors",
      "Radix Primitives",
      "React",
      "TypeScript",
      "vanilla-extract",
    ],
    description:
      "My component library built with Radix UI, vanilla-extract for styling, and TypeScript. It also includes custom React hooks and utility functions.",
    sourceCodeLink: "https://github.com/nayhoo/ui",
  },
  {
    title: "Portfolio",
    tags: ["nayhoo/ui", "Next.js", "React Query", "TypeScript"],
    description:
      "My portfolio site built with Next.js, @nayhoo/ui for UI components, React Query for data fetching, and TypeScript for type safety and better DX.",
    sourceCodeLink: "https://github.com/timkinsman/portfolio",
  },
  {
    title: "matthewkinsman.com",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    description:
      "Portfolio site for Matthew Kinsman, Senior Product Desiner. built with Next.js, TailwindCSS, and TypeScript.",
    sourceCodeLink: "https://matthewkinsman.com",
  },
];
