<script>
  import { fade } from "svelte/transition";
  import url from "../lib/utils/url";
</script>

{#key $url.hash}
  <div in:fade={{ delay: 50, duration: 300 }} class="page">
    <slot />
  </div>
{/key}
