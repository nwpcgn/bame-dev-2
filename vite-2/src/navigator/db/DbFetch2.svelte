<script>
  import DbBar1 from "./DbBar1.svelte";
  import Spinner from "../comp/Spinner.svelte";
  import { supabase } from "../../lib/data";
  let daten = [];
  const DB_SET = {
    type: "supabase",
    table: "south_park",
    keys: "ep,titel,name,st,tags,id,assets",
    filter: { col: "id", asc: true },
    options: [
      { val: "id", title: "Episoden" },
      { val: "titel", title: "Titel" },
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
  label="South Park"
/>

<hr />

{#if daten.length}
  <ul class="list">
    {#each daten as item}
      <li>
        <a href="#/db/db2">
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
  <Spinner>... loading</Spinner>
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
