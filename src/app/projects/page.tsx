import { ContentLayout } from "@/components/layouts/content-layout";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/constants/projects";
import { Box } from "@nayhoo/ui/box";

export const metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <ContentLayout>
      <Box display="grid" gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </ContentLayout>
  );
}
