import { browser } from "$app/environment";
import { BridgeMock } from "@bridgelauncher/api-mock";
import { readable } from "svelte/store";

export const bridge = readable<typeof window.Bridge>(window.Bridge, (set) => {
  if (browser) {
    if (window.Bridge) {
      set(window.Bridge)
    } else {
      set(new BridgeMock())
    }
  }
})

// TODO: Take out of readable and cache in localstorage