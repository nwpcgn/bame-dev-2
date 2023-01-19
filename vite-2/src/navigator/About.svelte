<script>
  import GoodBoi from "../lib/pico/GoodBoi.svelte";
  export let titel = "Titel";
  export let sub;
  export let bg;
</script>

<section>
  <!-- <h2>{titel}</h2> -->
  <GoodBoi {bg} {titel} />
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque illo
    harum, fugit fuga non repellat accusamus commodi deserunt deleniti
    dignissimos magni iste facilis! Voluptatibus adipisci provident ipsa aut
    repellat!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque illo
    harum, fugit fuga non repellat accusamus commodi deserunt deleniti
    dignissimos magni iste facilis! Voluptatibus adipisci provident ipsa aut
    repellat!
  </p>
</section>
