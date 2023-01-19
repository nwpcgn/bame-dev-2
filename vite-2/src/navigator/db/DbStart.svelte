<script>
  import GoodBoi from "../../lib/pico/GoodBoi.svelte";
  export let titel = "Titel";
  export let sub;
  export let bg;
</script>

<div class="section">
  <GoodBoi {bg} {titel} />
  <h1>{sub}</h1>
  <p>
    <a href="#/db/db1">
      <button class="secondary"> HT Teaser </button>
    </a>
    <a href="#/db/db2">
      <button class="secondary"> South Park </button>
    </a>
    <a href="#/db/db3">
      <button class="secondary"> Final Space </button>
    </a>
</div>

<style>
  .section {
    --spacing: 0.5rem;
  }
  h1,
  p {
    --h1-color: var(--color);
    margin-bottom: var(--spacing);
    margin-top: 0;
  }
  a,
  button {
    --text-decoration: none;
    margin-bottom: var(--spacing);
  }
</style>
