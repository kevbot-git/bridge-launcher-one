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
      <div>
        {app.label}
      </div>
    {/each}
  {/if}
</div>
