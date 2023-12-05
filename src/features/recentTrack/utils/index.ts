export const formatTrack = (track: { name: string; artists: { name: string }[] }) => {
  return `${track.artists[0].name} - ${track.name}`;
};
