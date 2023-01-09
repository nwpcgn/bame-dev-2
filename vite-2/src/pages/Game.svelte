<script>
  import url from "../lib/utils/url";
  import { supabase } from "../lib/data";
  import { onMount } from "svelte";
  let daten = [];
  const fetchData = async () => {
    console.log("fetchData");
    try {
      let { data, error } = await supabase.from("ht_teaser").select("*");
      if (error) throw error;
      if (data) {
        daten = data;
      }
    } catch (error) {
      alert(error.message);
    }
  };
  onMount(async () => {
    fetchData();
  });
</script>

<section {...$$restProps}>
  <article>
    <header>Application</header>
    <ul class="list">
      <li>
        <a href="#/">Home</a>
      </li>

      {#each daten as { id, titel, img_p, img_f, file_o, info }}
        <li>
          <a href={$url.hash}>{titel}</a>
        </li>
      {:else}
        <li>
          <article aria-busy="true" />
        </li>
      {/each}
    </ul>
  </article>
</section>
