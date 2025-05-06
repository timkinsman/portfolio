import { Project } from "@/features/projects/types/project";
import { Badge } from "@nayhoo/ui/badge";
import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { sprinkles, theme } from "@nayhoo/ui/theme";
import Link from "next/link";

export type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link passHref href={project.sourceCodeLink}>
      <Card>
        <Flex direction="column">
          <Heading level="4">{project.title}</Heading>

          <Flex
            gap="2"
            className={sprinkles({
              marginTop: 2,
            })}
            wrap="wrap"
          >
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </Flex>

          <Paragraph
            className={sprinkles({
              marginTop: 4,
            })}
            style={{ fontSize: theme.fontSizes[2] }}
          >
            {project.description}
          </Paragraph>
        </Flex>
      </Card>
    </Link>
  );
};
