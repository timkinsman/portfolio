"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from "@nayhoo/utils";
import { AxiosError } from "axios";
import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "react-query";
import { PromiseValue } from "type-fest";

const queryConfig: DefaultOptions = {
  queries: {
    // useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> =
  PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> =
  UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
  >;

export const useQueryWithToast = <QueryFnData,>(
  key: unknown[],
  queryFn: () => Promise<QueryFnData>,
  options?: UseQueryOptions<QueryFnData>,
): UseQueryResult<QueryFnData> => {
  // const toast = useToast();

  return useQuery({
    queryKey: key,
    queryFn: queryFn,
    ...merge(queryConfig, options ?? {}),
    onError: (err) => {
      // toast({
      //   title: "Error",
      //   description: `${err}`,
      //   error: true,
      //   action: (
      //     <ToastAction altText="Dismiss error notification" asChild>
      //       <Button size="1" variant="outline">
      //         Dismiss
      //       </Button>
      //     </ToastAction>
      //   ),
      // });

      if (options?.onError) {
        options.onError(err);
      }
    },
  });
};
