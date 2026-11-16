import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Text } from "@nayhoo/ui/text";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import { highlight } from "sugar-high";

function Code({
  children,
  ...props
}: Omit<React.ComponentProps<"code">, "children"> & { children: string }) {
  const codeHTML = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  h1: ({ children }: React.ComponentProps<"h1">) => (
    <Heading as="h1">{children}</Heading>
  ),
  h2: ({ children }: React.ComponentProps<"h2">) => (
    <Heading as="h2">{children}</Heading>
  ),
  h3: ({ children }: React.ComponentProps<"h3">) => (
    <Heading as="h3">{children}</Heading>
  ),
  h4: ({ children }: React.ComponentProps<"h4">) => (
    <Heading as="h4">{children}</Heading>
  ),
  h5: ({ children }: React.ComponentProps<"h5">) => (
    <Heading as="h5">{children}</Heading>
  ),
  h6: ({ children }: React.ComponentProps<"h6">) => (
    <Heading as="h6">{children}</Heading>
  ),
  p: Text,
  a: (props: React.ComponentProps<"a">) => <Link {...props} />,
  li: (props: React.ComponentProps<"li">) => (
    <Text asChild>
      <li {...props} />
    </Text>
  ),
  code: Code,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
