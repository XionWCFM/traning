export type FetchArgs = [string | URL, RequestInit | undefined];
export type ReturnFetchDefaultOptions = {
  fetch?: any;
  baseUrl?: string | URL;
  headers?: HeadersInit;
  interceptors?: {
    request?: () => Promise<any>;
  };
};

const applyDefaultOptions = (
  [input, requestInit]: FetchArgs,
  defaultOptions?: ReturnFetchDefaultOptions,
): FetchArgs => {
  const headers = new Headers(defaultOptions?.headers);
  new Headers(requestInit?.headers).forEach((value, key) => {
    headers.set(key, value);
  });
  let inputToReturn: FetchArgs[0] = input;
  if (defaultOptions?.baseUrl) {
    inputToReturn = new URL(input, defaultOptions.baseUrl);
  }
  return [inputToReturn, { ...requestInit, headers }];
};

const mergeRequestObjectWithRequestInit = (
  request: Request,
  requestInit?: RequestInit,
): Promise<RequestInit> => {
  const mergedRequest = new Request(request, requestInit);
  
};
