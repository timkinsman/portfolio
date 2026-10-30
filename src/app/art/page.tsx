import { ContentLayout } from "@/components/layouts/content-layout";
import { ArtCard } from "@/features/art/components/art-card";
import { art } from "@/features/art/constants/art";
import { Box } from "@nayhoo/ui/box";

export const metadata = {
  title: "Art",
};

export default function Page() {
  return (
    <ContentLayout>
      <Box display="grid" gap="8" columns={{ initial: "1", sm: "2" }}>
        {art.map((item) => (
          <ArtCard key={item.title} art={item} />
        ))}
      </Box>
    </ContentLayout>
  );
}
