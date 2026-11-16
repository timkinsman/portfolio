import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Separator } from "@nayhoo/ui/separator";
import { Text } from "@nayhoo/ui/text";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading as="h1">{children}</Heading>,
    h2: ({ children }) => <Heading as="h2">{children}</Heading>,
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    h4: ({ children }) => <Heading as="h4">{children}</Heading>,
    h5: ({ children }) => <Heading as="h5">{children}</Heading>,
    h6: ({ children }) => <Heading as="h6">{children}</Heading>,
    p: ({ children }) => <Text>{children}</Text>,
    hr: (props) => <Separator {...props} />,
    a: (props) => <Link {...props} />,
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
