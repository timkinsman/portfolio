"use client";

import { env } from "@/env.mjs";
import { api } from "@/lib/api-client";
import {
  ExtractFnReturnType,
  QueryConfig,
  useQueryWithToast,
} from "@/lib/react-query";
import { BaseEntity, GetCurrentlyListeningResponse } from "@/types/api";

export const getCurrentlyListening = (): Promise<
  BaseEntity<GetCurrentlyListeningResponse>
> => {
  const data = api.get<BaseEntity<GetCurrentlyListeningResponse>>(
    `${env.NEXT_PUBLIC_APP_URL}/api/currently-listening`,
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
    ["activeSessions"],
    () => getCurrentlyListening(),
    config,
  );
};
