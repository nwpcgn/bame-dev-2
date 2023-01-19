<script>
  import { onDestroy, onMount } from "svelte";

  export let src;
  export let controls = true;
  let ready;
  let duration;
  let played;
  let seeking;
  let buffered;
  let seekable;
  let ended;
  let currentTime;
  let playbackRate;
  export let paused;
  export let volume = 0.1;
  export let muted;
  let videoWidth;
  let videoHeight;
  $: if (paused) {
    console.log("Duration", duration, currentTime);
  }
  onMount(() => {
    console.log("MOUNT");
  });
  onDestroy(() => {
    paused = true;
    console.log("DESTROY");
  });
  $: console.log("played", paused);
</script>


  <video
    {src}
    {controls}
    bind:duration
    bind:buffered
    bind:played
    bind:seekable
    bind:seeking
    bind:ended
    bind:currentTime
    bind:playbackRate
    bind:paused
    bind:volume
    bind:muted
    bind:videoWidth
    bind:videoHeight
  />


<style>
  video {
    --typography-spacing-vertical: 1rem;
    max-width: 100%;
  }
</style>
