<script>
  import ThemeSwitch from "../../lib/pico/ThemeSwitch.svelte";
  import { useLocation, Link } from "svelte-navigator";
  import {appData} from "../../lib/data"
  const location = useLocation();
  $: console.log("current:", $location.pathname);
  const navData = appData.map((x) => x.link);
</script>

<nav class="app-bar container-fluid">
  <ul>
    <li>
      <a href="/">Nwp-App</a>
    </li>
  </ul>
  <ul>
    {#each navData as {path, name}, i}
{#if i == 0}
<li>
  <a class="my-link {$location.pathname === path ? 'active' : ''}" href="#{path}">{name}</a>
</li>
{:else}
<li>
  <a class="my-link {$location.pathname.includes(path) ? 'active' : ''}" href="#{path}">{name}</a>
</li>
{/if}
     

    {/each}
    <li>
      <ThemeSwitch />
    </li>
  </ul>
</nav>

<style>
  :global(.my-link.active) {
   /* --background-color: var(--primary-focus);*/
     font-style: italic; 
  }
</style>
