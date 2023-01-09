<script>
  import SignOut from "../lib/pico/SignOut.svelte";
  import url from "../lib/utils/url";
</script>

<section {...$$restProps}>
  <article>
    <header>Nwp-Application</header>
    <ul class="list">
      <li>
        <a href="#/app">Start App</a>
      </li>
      <li>
        <a href="#/user">User</a>
      </li>
      <li>
        <a href="#/settings">Settings</a>
      </li>
    </ul>
    <footer>
      <small>nwp-studios@nwp-cgn.de</small>
    </footer>
  </article>
</section>

<style>
  footer {
    text-align: center;
  }
</style>
