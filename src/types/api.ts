export type BaseEntity<T> = {
  data?: T;
  error?: string;
};

export type GetCurrentlyListeningResponse = {
  artist: string;
  track: string;
};
