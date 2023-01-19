<script>
  import { fly } from "svelte/transition";

  export let x = 200;
  export let duration = 600;
  /** @type {"forward"|"backward"} */
  export let direction = "forward";

  $: directionFactor = direction === "forward" ? 1 : -1;
</script>

<div
  class="page"
  in:fly={{ x: x * directionFactor, duration }}
  out:fly={{ x: -x * directionFactor, duration }}
>
  <slot />
</div>

<style>
  :global(.page) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: var(--background-color);
    color: var(--color);
  }
  :global(.page > section) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: var(--spacing);
    padding-left: var(--spacing);
  }
</style>
