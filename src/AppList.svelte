<script lang="ts">
  import { BridgeApi } from "./lib/bridge";

  const appsQuery = BridgeApi.createQuery('getAppsURL');
</script>

<div>
  {#if $appsQuery.isPending}
    loading...
  {:else if $appsQuery.isError}
    error: {$appsQuery.error.message}
  {:else if $appsQuery.isSuccess}
    {#each $appsQuery.data.apps as app}
      <div
        role="button"
        tabindex="0"
        on:click={() => window.Bridge.requestLaunchApp(app.packageName)}
        on:keypress={() => window.Bridge.requestLaunchApp(app.packageName)}
      >
        {app.label}
      </div>
    {/each}
  {/if}
</div>

<style>
  [role="button"] {
    font-size: 1.5rem;
  }
</style>