import { callDataApi } from './CustomFetch';

export default class ActorApi {

  static getPhoneticData(word: string): Promise<any> {
    let dir = `/api/phoneticData/data`
    return callDataApi<any>(dir, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"word": word}),
    });
  }
  // static getActorSearchQueryResult(url: string): Promise<any> {
  //   return callDataApi<any>(`/api/actor/search`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({"url": url}),
  //   });
  // }
}
