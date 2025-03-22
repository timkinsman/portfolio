import { Project } from "@/features/projects/types/project";
import { Badge } from "@nayhoo/ui/badge";
import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Link } from "@nayhoo/ui/link";
import { Paragraph } from "@nayhoo/ui/paragraph";
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

        <Flex wrap="wrap" gap="4">
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
                initial: 3,
              },
            })}
            style={{ fontSize: theme.fontSizes[2] }}
          >
            {project.description}
          </Paragraph>
        </Flex>

        {hasLinks && (
          <Flex
            gap="4"
            className={sprinkles({
              marginTop: {
                initial: 6,
              },
            })}
            wrap="wrap"
          >
            {project.livePreviewLink && (
              <Link
                color="secondary"
                href={project.livePreviewLink}
                style={{ fontSize: theme.fontSizes[1] }}
              >
                Live preview
              </Link>
            )}

            {project.sourceCodeLink && (
              <Link
                color="secondary"
                href={project.sourceCodeLink}
                style={{ fontSize: theme.fontSizes[1] }}
              >
                Source code
              </Link>
            )}
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
