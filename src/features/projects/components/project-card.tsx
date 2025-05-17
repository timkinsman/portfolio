import { Project } from "@/features/projects/types/project";
import { Badge } from "@nayhoo/ui/badge";
import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Paragraph } from "@nayhoo/ui/paragraph";
import { Text } from "@nayhoo/ui/text";
import { sprinkles, theme } from "@nayhoo/ui/theme";

export type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasLinks = project.livePreviewLink || project.sourceCodeLink;

  return (
    <Card>
      <Flex direction="column">
        <Heading level="4">{project.title}</Heading>

        <Flex
          gap="2"
          className={sprinkles({
            marginTop: {
              initial: 2,
            },
          })}
          wrap="wrap"
        >
          {project.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </Flex>

        <Paragraph
          className={sprinkles({
            marginTop: {
              initial: 4,
            },
          })}
          style={{ fontSize: theme.fontSizes[2] }}
        >
          {project.description}
        </Paragraph>

        {hasLinks && (
          <Flex
            gap="4"
            className={sprinkles({
              marginTop: {
                initial: 5,
              },
            })}
            wrap="wrap"
          >
            {project.livePreviewLink && (
              <Link asChild color="secondary" href={project.livePreviewLink}>
                <Text size="1">Live preview</Text>
              </Link>
            )}

            {project.sourceCodeLink && (
              <Link asChild color="secondary" href={project.sourceCodeLink}>
                <Text size="1">Source code</Text>
              </Link>
            )}
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
