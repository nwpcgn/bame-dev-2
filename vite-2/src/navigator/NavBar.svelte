<script>
  import ThemeSwitch from "../lib/pico/ThemeSwitch.svelte";
  import { useLocation, Link } from "svelte-navigator";
  import {appData} from "../lib/data"
  const location = useLocation();
  $: console.log("current:", $location.pathname);
  const navData = appData.map((x) => x.link);
</script>

<nav class="app-bar container-fluid">
  <ul>
    <li>
      <Link to="/">Nwp-App</Link>
    </li>
  </ul>
  <ul>
    {#each navData as {path, name}}
      <li>
        <Link class="my-link {$location.pathname === path ? 'active' : ''}" to={path}>{name}</Link>
      </li>
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
