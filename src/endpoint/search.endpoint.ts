import { MusicItem } from '../redux/feature/search/search.reducer';

export const SearchEndpoints = {
  search: (query: string, controller?: AbortController): Promise<MusicItem[]> => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    };
    if (controller) {
      Object.assign(requestOptions, { signal: controller.signal });
    }
    return fetch('http://localhost:30000/search/query', requestOptions)
      .then((response: Response) => response.json())
      .then((data) => data.body.items)
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.debug(`Request aborted: ${error}`);
        }
      });
  },
};
