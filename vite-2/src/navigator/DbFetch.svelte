<script>
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


  $: console.log("Data Fetch:", daten)
</script>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque illo
  harum, fugit fuga non repellat accusamus commodi deserunt deleniti dignissimos
  magni iste facilis! Voluptatibus adipisci provident ipsa aut repellat!
</p>
