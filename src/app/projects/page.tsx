import { ContentLayout } from "@/components/layouts/content-layout";
import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/constants/projects";
import { Grid } from "@nayhoo/ui";

export const metadata = {
  title: "Projects | Tim Kinsman",
};

export default function Page() {
  return (
    <ContentLayout>
      <Grid gap="4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Grid>
    </ContentLayout>
  );
}
