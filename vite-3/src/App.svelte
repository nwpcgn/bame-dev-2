<script>
  import AppBar from "./lib/pico/AppBar.svelte";
  import { onMount } from "svelte";
  import PageContainer from "./pages/PageContainer.svelte";
  import url from "./lib/utils/url";
  import Start from "./pages/Start.svelte";
  import Character from "./pages/Character.svelte";
  import Episodes from "./pages/Episodes.svelte";
  import Location from "./pages/Location.svelte";
  import Quotes from "./pages/Quotes.svelte";
  let pageData = [
    {
      titel: "Page Not Found",
      sub: "404",
    },
    {
      type: "GET",
      name: "Startseite",
      path: "/",
      fullUrl: "https://finalspaceapi.com/api/v0/",
      daten: [
        {
          type: "GET",
          name: "All Characters",
          path: "/character",
          queryParams: [
            {
              optional: true,
              name: "Sort By",
              values: ["asc", "desc"],
            },
          ],
          fullUrl: "https://finalspaceapi.com/api/v0/character",
        },
        {
          type: "GET",
          name: "All Episodes",
          path: "/episode",
          queryParams: [
            {
              optional: true,
              name: "Sort By",
              values: ["asc", "desc"],
            },
          ],
          fullUrl: "https://finalspaceapi.com/api/v0/episode",
        },
        {
          type: "GET",
          name: "All Locations",
          path: "/location",
          queryParams: [
            {
              optional: true,
              name: "Sort By",
              values: ["asc", "desc"],
            },
          ],
          fullUrl: "https://finalspaceapi.com/api/v0/location",
        },
        {
          type: "GET",
          name: "All Quotes",
          path: "/quote",
          queryParams: [
            {
              optional: true,
              name: "Sort By",
              values: ["asc", "desc"],
            },
          ],
        },
      ],
      component: Start,
    },
    {
      type: "GET",
      name: "All Characters",
      path: "/character",
      queryParams: [
        {
          optional: true,
          name: "Sort By",
          values: ["asc", "desc"],
        },
      ],
      fullUrl: "https://finalspaceapi.com/api/v0/character",
      component: Character,
    },
    {
      type: "GET",
      name: "All Episodes",
      path: "/episode",
      queryParams: [
        {
          optional: true,
          name: "Sort By",
          values: ["asc", "desc"],
        },
      ],
      fullUrl: "https://finalspaceapi.com/api/v0/episode",
      component: Episodes,
    },
    {
      type: "GET",
      name: "All Locations",
      path: "/location",
      queryParams: [
        {
          optional: true,
          name: "Sort By",
          values: ["asc", "desc"],
        },
      ],
      fullUrl: "https://finalspaceapi.com/api/v0/location",
      component: Location,
    },
    {
      type: "GET",
      name: "All Quotes",
      path: "/quote",
      queryParams: [
        {
          optional: true,
          name: "Sort By",
          values: ["asc", "desc"],
        },
      ],
      fullUrl: "https://finalspaceapi.com/api/v0/quote/",
      component: Quotes,
    },
  ];
  let current = 0;
  $: pd = pageData[current];
  $: {
    switch ($url.hash) {
      case "":
      case "#":
      case "#/":
        current = 1;
        break;
      case "#/character":
        current = 2;
        break;
      case "#/episode":
        current = 3;
        break;
      case "#/location":
        current = 4;
        break;
      case "#/quote":
        current = 5;
        break;
      default:
        current = 0;
        break;
    }
  }

  console.log("APP init");
  onMount(() => {
    console.log("App Mounted");
  });
  $: console.log("PageData", pd);
</script>

<AppBar />
<main>
  <PageContainer>
    {#if pd && pd.component}
      <svelte:component this={pd.component} {...pd} />
    {:else}
      {pd.titel}
    {/if}
  </PageContainer>
</main>

<style>
  :global(
      a:is([aria-current], :hover, :active, :focus),
      [role="link"]:is([aria-current], :hover, :active, :focus)
    ) {
    --text-decoration: none;
  }
</style>
