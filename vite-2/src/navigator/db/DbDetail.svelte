<script>
  import DbVideo from "./DbVideo.svelte";
  import Spinner from "../comp/Spinner.svelte";
  import { supabase } from "../../lib/data";
  export let params;
  let db = "south_park";
  let id = 0;
  let daten = [];
  let img_arr = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
  ];
  let open;
  const toggle = () => {
    open = !open;
  };
  if (params && params.pid) {
    if (params.pid === "db1") {
      db = "ht_teaser";
    } else {
      db = "south_park";
    }
  }
  if (params && params.id) {
    id = params.id;
  }

  const fetchData = async () => {
    daten = [];
    try {
      let { data, error } = await supabase.from(db).select("*").eq("id", id);
      if (error) throw error;
      if (data) {
        daten = data;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("Data Fetch:", daten);
    }
  };

  $: fetchData(id);
</script>

<section>
  {#if daten.length}
    <section>
      <a href="#/" on:click|preventDefault={() => history.back()}>Back</a>
    </section>
    {#each daten as item}
      <div>
        <h4>{item.titel}</h4>
        <p>{item.info}</p>
        <div>
          <button class="secondary" on:click={toggle}
            >{open ? "Screener" : "Video"}</button
          >
        </div>
        {#if open}
          <div>Video</div>
          <figure>
            <DbVideo src={item.file_o} />
          </figure>
        {:else}
          <div>Screener</div>
          <figure>
            <div class="slider">
              {#each img_arr as img, id}
                <img src="{item.img_p}{img}" alt="" />
              {/each}
            </div>
          </figure>
        {/if}
      </div>
    {/each}
  {:else}
    <Spinner />
  {/if}
</section>

<style>
  :root {
    --typography-spacing-vertical: 1rem;
  }
  .media {
    display: flex;
    align-items: start;
    justify-content: start;
  }
  .media > div {
    flex: 1;
  }

  .media > aside {
    margin: 0;
  }
  .slider {
    display: flex;
  }
</style>
