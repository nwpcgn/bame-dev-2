<script>
  import Start from "./pages/Start.svelte";
  import Settings from "./pages/Settings.svelte";
  import AppBar from "./lib/pico/AppBar.svelte";
  import url from "./lib/utils/url";
  import NotFound from "./pages/NotFound.svelte";
  import Game from "./pages/Game.svelte";
  import Auth from "./lib/pico/Auth.svelte";
  import UserPanel from "./pages/UserPanel.svelte";
  let pageData = [
    {
      titel: "Page Not Found",
      sub: "404",
    },
    {
      titel: "Nwp-Studio",
      sub: "Startseite",
    },
    {
      titel: "Application",
      sub: "Game",
    },
    {
      titel: "User Panel",
      sub: "User Panel",
      center: true,
    },
    {
      titel: "Settings",
      sub: "Settings",
      center: true,
    },
  ];
  let pd = pageData[0];

  $: {
    switch ($url.hash) {
      case "":
      case "#":
      case "#/":
        pd = pageData[1];
        break;
      case "#/app":
        pd = pageData[2];
        break;
      case "#/user":
        pd = pageData[3];
        break;
      case "#/settings":
        pd = pageData[4];
        break;
      default:
        pd = pageData[0];
        break;
    }
  }
  // $: console.log(pageData);
</script>

<Auth>
  <AppBar />
  <main class:form={pd.center}>
    {#if $url.hash === "" || $url.hash === "#/"}
      <Start class="container" />
    {:else if $url.hash === "#/settings"}
      <Settings class="container" />
    {:else if $url.hash === "#/user"}
      <UserPanel />
    {:else if $url.hash === "#/app"}
      <Game class="container" />
    {:else}
      <NotFound class="container" />
    {/if}
  </main>
</Auth>
