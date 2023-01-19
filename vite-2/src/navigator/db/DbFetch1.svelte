<script>
  import Spinner from "../comp/Spinner.svelte";
  import DbBar1 from "./DbBar1.svelte";
  import { supabase } from "../../lib/data";
  export let showDetail;
  let daten = [];
  let open = false;
  const DB_SET = {
    type: "supabase",
    table: "ht_teaser",
    keys: "id,titel,img_p,img_f,file_o,info",
    filter: { col: "titel", asc: true },
    options: [
      { val: "titel", title: "Titel" },
      { val: "id", title: "Index" },
    ],
  };
  const fetchData = async (filter) => {
    daten = [];
    try {
      let { data, error } = await supabase
        .from(DB_SET.table)
        .select("*")
        .order(filter.col, { ascending: filter.asc });
      if (error) throw error;
      if (data) {
        daten = data;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("Data Fetch:", DB_SET.table, daten);
    }
  };

  $: fetchData(DB_SET.filter);
</script>

<DbBar1
  bind:filter={DB_SET.filter}
  bind:options={DB_SET.options}
  label="HT-Teaser"
/>

<hr />

{#if daten.length}
  <ul class="list">
    {#each daten as item}
      <li>
        <a href="#/db/db1/{item.id}">
          <div class="media">
            <div>
              {item.titel}
            </div>
            <aside>
              <small>{item.id}</small>
            </aside>
          </div>
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <Spinner />
{/if}

<style>
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
</style>
