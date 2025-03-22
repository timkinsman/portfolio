import { Heading } from "@nayhoo/ui/heading";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return <Heading level="1">{title}</Heading>;
};
