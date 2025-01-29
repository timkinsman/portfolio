"use client";

import { api } from "@/lib/api-client";
import {
  ExtractFnReturnType,
  QueryConfig,
  useQueryWithToast,
} from "@/lib/react-query";
import { GetCurrentlyListeningApiResponse } from "@/types/api";

export const getCurrentlyListening =
  (): Promise<GetCurrentlyListeningApiResponse> => {
    const data = api.get<GetCurrentlyListeningApiResponse>(
      "/api/currently-listening",
    );

    return data;
  };

type QueryFnType = typeof getCurrentlyListening;

type useCurrentlyListeningOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useCurrentlyListening = ({
  config,
}: useCurrentlyListeningOptions) => {
  return useQueryWithToast<ExtractFnReturnType<QueryFnType>>(
    ["currentlyListening"],
    () => getCurrentlyListening(),
    config,
  );
};
