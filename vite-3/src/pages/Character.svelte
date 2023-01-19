<script>
  import { onMount } from "svelte";
  export let name = "Characters";
  export let fullUrl = "https://finalspaceapi.com/api/v0/character";
  let data = [];
  const handleClick = async () => {
    data = await fetch(fullUrl).then((x) => x.json());
  };
  console.log("init Character");
  onMount(() => {
    console.log("mount Character");
    handleClick();
  });
</script>

<section>
  <h2>{name}</h2>
  <div class="row row-cols-2 row-cols-lg-3 g-2">
    {#each data as { id, name, status, gender, species, origin, img_url }}
      <div class="col">
        <article>
          <div class="media">
            <div class="truncate">
              <h4>{name}</h4>
              {origin}
            </div>
            <aside><img src={img_url} alt="" /></aside>
          </div>
        </article>
      </div>
    {/each}
  </div>
</section>

<style>
  article {
    margin-bottom: 0;
    /*     padding-top: 0;
    padding-bottom: 0; */
  }
</style>
