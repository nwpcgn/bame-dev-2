<script>
  import ThemeSwitch from "./ThemeSwitch.svelte";
  import url from "../utils/url";
//  $: console.log($url.hash)
</script>

<nav class="app-bar container-fluid">
  <ul>
    <li>
      <a href="#/" class="contrast">
        <strong>Nwp-App</strong>
      </a>
    </li>
  </ul>
  <ul>
    <li>
      <ThemeSwitch />
    </li>
  </ul>
</nav>

<style>
  nav {
    box-shadow: var(--card-box-shadow);
  }
</style>

