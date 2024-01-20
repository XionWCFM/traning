type REST_API_METHOD = 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT';

export class Fetcher {
  accessToken: string;
  option: RequestInit;
  baseUrl: string;
  constructor(config?: {
    baseUrl: string;
    accessToken: string;
    option: RequestInit;
  }) {
    this.accessToken = config?.accessToken ?? '';
    this.baseUrl = config?.baseUrl ?? '';
    this.option = {
      headers: {
        authorization: this.accessToken,
      },
    };
  }
  setAccessToken(token: string) {
    this.accessToken = token;
  }
  setOption() {}
}
