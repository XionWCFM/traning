import { ENV } from '@/src/@environment/env';
import { DeepPartial } from '../../@shared/types/deep-partial';
import { deepMerge } from '../../@shared/utils/object/deep-merge/deep-merge';

type REST_API_METHOD = 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT';

export class Fetcher {
  private accessToken: string;
  private option: RequestInit;
  private baseUrl: string;
  constructor(config?: {
    baseUrl?: string;
    accessToken?: string;
    option?: RequestInit;
  }) {
    this.accessToken = config?.accessToken ?? '';
    this.baseUrl = config?.baseUrl ?? '';
    this.option = deepMerge(config?.option ?? {}, {
      headers: {
        authorization: this.accessToken,
      },
    });
  }
  async get(endPoint: string, option?: RequestInit) {
    return await this.fetching(endPoint, option ?? {}, 'GET');
  }
  async post(endPoint: string, option?: RequestInit) {
    return await this.fetching(endPoint, option ?? {}, 'POST');
  }
  async delete(endPoint: string, option?: RequestInit) {
    return await this.fetching(endPoint, option ?? {}, 'DELETE');
  }
  async put(endPoint: string, option?: RequestInit) {
    return await this.fetching(endPoint, option ?? {}, 'PUT');
  }
  async patch(endPoint: string, option?: RequestInit) {
    return await this.fetching(endPoint, option ?? {}, 'PATCH');
  }

  private async fetching(
    endPoint: string,
    option: RequestInit,
    method: REST_API_METHOD,
  ) {
    const response = await fetch(
      `${this.baseUrl}${endPoint}`,
      deepMerge(this.option, {
        ...option,
        method,
      }),
    );
    this.responseCheck(response);
    const result = await this.parseBody(response);
    return result;
  }
  setAccessToken(token: string) {
    this.accessToken = token;
    this.option = deepMerge(this.option, {
      headers: {
        authorization: this.accessToken,
      },
    });
  }
  setOption(newOption: DeepPartial<RequestInit>) {
    this.option = deepMerge(this.option, newOption);
  }
  setCredentials(isCredential: boolean) {
    const credentials: RequestInit['credentials'] = isCredential
      ? 'include'
      : 'same-origin';
    this.option = deepMerge(this.option, {
      credentials,
    });
  }
  setBaseUrl(newUrl: string) {
    this.baseUrl = newUrl;
  }
  private responseCheck(response: Response) {
    if (!response.ok) {
      throw new Error('fetch error');
    }
  }
  private async parseBody(response: Response) {
    try {
      return await response.json();
    } catch (e) {
      return await response.text();
    }
  }
}

export const authFetcher = new Fetcher({
  baseUrl: ENV.baseUrl,
  accessToken: 'example.token.access',
  option: {
    headers: {
      'Content-type': 'application/json',
    },
  },
});

export const fetcher = new Fetcher({
  baseUrl: ENV.baseUrl,
  option: {
    headers: {
      'Content-type': 'application/json',
    },
  },
});
