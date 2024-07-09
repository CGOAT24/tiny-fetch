const tFetch = ({url, body, method}: {url: string | URL, body?: any | undefined, method: string }, config?: RequestInit | undefined) => {
  if (!config) {
    config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: method
    };
  }
  if (body) {
    config.body = JSON.stringify(body);
  }
  return fetch(url, config);
}

export const tinyFetch = {
  get: async <T>(url: string | URL, config?: RequestInit | undefined): Promise<T> => {
    const response: Response = await tFetch({url, method: 'GET'}, config);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response.json();
  },
  post: async <T>(url: string | URL, body?: Object | undefined, config?: RequestInit | undefined): Promise<T> => {
    const response: Response = await tFetch({url, method: 'POST', body}, config);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return await response.json();
  },
  patch: async <T>(url: string | URL, body?: Object | undefined, config?: RequestInit | undefined): Promise<T> => {
    const response: Response = await tFetch({url, method: 'PATCH', body}, config);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return await response.json();
  },
  put: async <T>(url: string | URL, body?: Object | undefined, config?: RequestInit | undefined): Promise<T> => {
    const response: Response = await tFetch({url, method: 'PUT', body}, config);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return await response.json();
  },
  delete: async <T>(url: string | URL, config?: RequestInit | undefined): Promise<T> => {
    const response: Response = await tFetch({url, method: 'DELETE'}, config);
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response.json();
  }
};