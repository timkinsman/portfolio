import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Paragraph } from "@nayhoo/ui/paragraph";
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
    <Heading level="1">{children}</Heading>
  ),
  h2: ({ children }: React.ComponentProps<"h2">) => (
    <Heading level="2">{children}</Heading>
  ),
  h3: ({ children }: React.ComponentProps<"h3">) => (
    <Heading level="3">{children}</Heading>
  ),
  h4: ({ children }: React.ComponentProps<"h4">) => (
    <Heading level="4">{children}</Heading>
  ),
  h5: ({ children }: React.ComponentProps<"h5">) => (
    <Heading level="5">{children}</Heading>
  ),
  h6: ({ children }: React.ComponentProps<"h6">) => (
    <Heading level="6">{children}</Heading>
  ),
  p: Paragraph,
  //   TODO: export LinkProps
  a: (props: React.ComponentProps<"a">) => (
    // @ts-expect-error: need to resolve
    <Link color="secondary" {...props} />
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
