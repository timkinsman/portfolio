import { ContentLayout } from "@/components/layouts/content-layout";
import { ArtCard } from "@/features/art/components/art-card";
import { art } from "@/features/art/constants/art";
import { Grid } from "@nayhoo/ui/grid";

export const metadata = {
  title: "Art",
};

export default function Page() {
  return (
    <ContentLayout>
      <Grid gap="8" columns={{ initial: "1", sm: "2" }}>
        {art.map((item) => (
          <ArtCard key={item.title} art={item} />
        ))}
      </Grid>
    </ContentLayout>
  );
}
