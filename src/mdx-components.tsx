import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { Separator } from "@nayhoo/ui/separator";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading level="1">{children}</Heading>,
    h2: ({ children }) => <Heading level="2">{children}</Heading>,
    h3: ({ children }) => <Heading level="3">{children}</Heading>,
    h4: ({ children }) => <Heading level="4">{children}</Heading>,
    h5: ({ children }) => <Heading level="5">{children}</Heading>,
    h6: ({ children }) => <Heading level="6">{children}</Heading>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    hr: (props) => <Separator {...props} />,
    a: (props) => <Link color="secondary" {...props} />,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
