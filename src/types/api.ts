export type BaseEntity<T> = {
  data: T | null;
  isError: boolean;
  message: string | null;
};

export type GetCurrentlyListeningResponse = {
  artist: string;
  track: string;
};
