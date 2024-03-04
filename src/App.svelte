<script lang="ts">
  import { onMount } from "svelte";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import AppList from "./AppList.svelte";

  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <main>
    <AppList />
  </main>
</QueryClientProvider>

<style>
</style>
