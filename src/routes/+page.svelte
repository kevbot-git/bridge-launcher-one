<script lang="ts">
	import type { BridgeGetAppsResponse, BridgeInstalledAppInfo } from "@bridgelauncher/api";
	import { onMount } from "svelte";
	import type { Readable } from "svelte/store";

  let bridge: Readable<typeof window.Bridge>
  let apps: BridgeInstalledAppInfo[] = []

  onMount(async () => {
      ({ bridge } = await import('$lib/bridge'))
      bridge.subscribe(async (_bridge) => {
        const response = await fetch(_bridge.getAppsURL());
        ({ apps } = await response.json() as BridgeGetAppsResponse);
      });
  })
</script>

<table>
  <tbody>
    {#each apps as app}
      <tr>
        <td>
          <div
            role="button"
            tabindex="0"
            on:click={() => $bridge.requestLaunchApp(app.packageName)}
            on:keypress={() => $bridge.requestLaunchApp(app.packageName)}
          >{app.label}</div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  [role="button"] {
    cursor: pointer;
  }
</style>