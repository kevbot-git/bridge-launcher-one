import type { BridgeGetAppsResponse, JSToBridgeAPI } from "@bridgelauncher/api";
import { createQuery } from "@tanstack/svelte-query";

export class BridgeApi {
  static createQuery<UrlGetter extends keyof EndpointTypes>(
    endpoint: UrlGetter,
  ) {
    const url = (window.Bridge[endpoint] as () => string)();

    return createQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await fetch(url);
        const data = (await response.json()) as EndpointTypes[UrlGetter];
        return data;
      },
    });
  }
}

interface EndpointTypes extends Record<UrlGetterKey, Response> {
  getAppsURL: BridgeGetAppsResponse;
  getProjectURL: object;
  getDefaultAppIconURL: object;
}

type Response = BridgeGetAppsResponse | object;
type UrlGetterKey = keyof JSToBridgeAPI;
