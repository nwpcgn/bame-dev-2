<script>
  import { onMount } from "svelte";

  export let name = "Location";
  export let fullUrl = "https://finalspaceapi.com/api/v0/location/";
  let data = [];
  const handleClick = async () => {
    data = await fetch(fullUrl).then((x) => x.json());
  };
  console.log("init " + name)
  onMount(() => {
    console.log("mount " + name)
    handleClick()
  })
</script>

<section>
    <h2>{name}</h2>
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
</section>

<style>
  section {
    padding-top: 1rem;
  }
</style>
