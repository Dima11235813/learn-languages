const DATA_API_URL = "http://localhost:8081"
const APP_API_URL = "http://localhost:8081"

export const callDataApi = <T>(endpoint: string, init?: RequestInit) => {
  return customFetch<T>(`${DATA_API_URL}${endpoint}`, init);
}
export const callAppApi = <T>(endpoint: string, init?: RequestInit) => {
  return customFetch<T>(`${APP_API_URL}${endpoint}`, init);
}

export const customFetch = <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  //Use to add token to headers
  // let newInit: RequestInit = {}

  return (
    fetch(input, init)
      .then((response: Response) => {
        return response.json();
      })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        console.error(error)
        return Promise.reject();
      })
  );
};
