<script>
  export let daten = [
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
  ];
</script>

<section>
  <div class="grid">
    {#each daten as item}
      <article>
        <header>{item.name}</header>
        <a href="#{item.path}">
          {item.name}
        </a>
      </article>
    {/each}
  </div>
  <!--   <div>
    <pre>{JSON.stringify(daten, null, 2)}</pre>
  </div> -->
</section>


<style>
  article {
    text-align: center;
  }
</style>