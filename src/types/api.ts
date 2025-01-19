export type BaseEntity<TData = unknown, TError = unknown> =
  | {
      data: TData;
      error: null;
      isError: false;
      isSuccess: true;
    }
  | {
      data: null;
      error: TError;
      isError: true;
      isSuccess: false;
    };

type GetCurrentlyListeningResponse =
  | {
      isCurrentlyListening: true;
      currentlyListening: {
        artist: string;
        track: string;
      };
    }
  | {
      isCurrentlyListening: false;
      currentlyListening: null;
    };

export type GetCurrentlyListeningApiResponse =
  BaseEntity<GetCurrentlyListeningResponse>;
