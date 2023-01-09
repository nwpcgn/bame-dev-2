<script>
  import { _profile, _user } from "../lib/data";
  import SignIn from "../lib/pico/SignIn.svelte";
</script>

{#if $_profile}
  <SignIn />
{:else}
  <div {...$$restProps}>loading</div>
{/if}
