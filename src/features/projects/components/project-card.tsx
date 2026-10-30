import { Project } from "@/features/projects/types/project";
import { Badge } from "@nayhoo/ui/badge";
import { Box } from "@nayhoo/ui/box";
import { Card } from "@nayhoo/ui/card";
import { Flex } from "@nayhoo/ui/flex";
import { Heading } from "@nayhoo/ui/heading";
import { Text } from "@nayhoo/ui/text";
import { theme } from "@nayhoo/ui/theme";
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

          <Box
            display="flex"
            gap="2"
            style={{
              marginTop: theme.space[2],
            }}
            wrap="wrap"
          >
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </Box>

          <Text size="2" style={{ marginTop: theme.space[2] }}>
            {project.description}
          </Text>
        </Flex>
      </Card>
    </Link>
  );
};
