import Axios, { AxiosRequestConfig } from 'axios';

export class ServerApi {
  private static baseConfig: AxiosRequestConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      credentials: 'include',
      'Content-Type': 'application/json'
    },
    baseURL: '/api',
  };

  public static get<T = any>(
    url: string,
  ): Promise<T> {
    return this.makeRequest('get', url, null);
  }

  public static post<T = any, K = any>(
    url: string,
    data: K,
  ): Promise<T> {
    return this.makeRequest('post', url, data);
  }

  public static delete<T = any, K = any>(
    url: string,
    data: K = null,
  ): Promise<T> {
    return this.makeRequest('delete', url, data);
  }

  private static makeRequest<T = any, K = any>(
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data: K,
  ): Promise<T> {
    const axiosInstance = Axios.create(this.baseConfig);
    return new Promise<T>((resolve, reject) => {
      axiosInstance
        .request({ url: `${url}`, data, method })
        .then(response => resolve(response.data))
        .catch(error => {
          console.error(error);
          reject(new Error(`Error in ${method} request by url: ${url}`));
        });
    });
  }
}
