<script>
  import DbModal from "./DbModal.svelte";
  import DbFetch3 from "./DbFetch3.svelte";
  import DbFetch2 from "./DbFetch2.svelte";
  import DbFetch1 from "./DbFetch1.svelte";
  import DbStart from "./DbStart.svelte";
  export let titel;
  export let sub;
  export let bg;
  export let params;
  let db = null;
  let id = null;
  let open = false;
  const toggle = () => {
    open = !open;
  };
  let payload = null;
  const showDetail = (note) => {
    payload = note;
    open = true;
  };

  if (params && params.pid) {
    db = params.pid;
  }
  if (params && params.id) {
    id = params.id;
  } else {
    id = null;
  }
</script>

{#if db === "db1"}
  <section><DbFetch1 /></section>
{:else if db === "db2"}
  <section><DbFetch2 /></section>
{:else if db === "db3"}
  <DbFetch3 />
{:else}
  <section><DbStart {titel} {sub} {bg} /></section>
{/if}

<DbModal bind:open bind:payload>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
    sapiente rem explicabo soluta unde quis in sed ipsam neque ut enim hic
    laborum quaerat delectus amet similique, veritatis, cumque est.
  </p>
</DbModal>
