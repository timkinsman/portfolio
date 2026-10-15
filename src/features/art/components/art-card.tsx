import { Flex } from "@nayhoo/ui/flex";
import { Image } from "@nayhoo/ui/image";
import { Text } from "@nayhoo/ui/text";
import { Art } from "../types/art";

type ArtCardProps = {
  art: Art;
};

export const ArtCard = ({ art }: ArtCardProps) => {
  return (
    <Flex gap="2" direction="column">
      <Image src={art.imageSrc} alt={art.title} />
      <Text>
        {art.title} • {art.year}
      </Text>
    </Flex>
  );
};
