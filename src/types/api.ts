export type BaseEntity<TData = unknown, TError = unknown> =
  | {
      data: TData;
      error: null;
      isError: false;
      isSuccess: true;
      // status: "success";
    }
  | {
      data: undefined;
      error: TError;
      isError: true;
      isSuccess: false;
      // status: "error";
    };

export type GetCurrentlyListeningResponse = {
  artist: string;
  track: string;
};

export type GetCurrentlyListeningApiResponse =
  BaseEntity<GetCurrentlyListeningResponse>;
