<script>
  import { onMount } from "svelte";
  export let bg = null;
  export let titel = "";
  let src = "";

  onMount(() => {
    if (bg) {
      src = bg;
    } else {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then(({ message }) => {
          src = message;
        });
    }
  });
</script>

<figure>
  {#if titel}
    <figcaption>{titel}</figcaption>
  {/if}
  <img {src} alt="A very good boi" />
</figure>

<style>
  figure {
    --typography-spacing-vertical: 1rem;
  }
  img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    background: #ddd;
  }
</style>
