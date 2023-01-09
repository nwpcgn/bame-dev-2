<script>
  import Navi from "./navigator/Navi.svelte";
  import Auth from "./lib/pico/Auth.svelte";

  // $: console.log(pageData);
</script>

<Auth>
  <!--  <AppBar /> -->
    <Navi />
</Auth>
