<script>
  import { onMount } from "svelte";
  import { _session } from "../data";
  const icon1 = `<svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 17V3a7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/></svg>`;
  const icon2 = `<svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 10,17 V 3 a -7,7 0 0 1 0,14 z m 0,1 a -8,8 0 1 1 0,-16 -8,8 0 0 1 0,16 z" clip-rule="evenodd" /></svg>`;
  let _schema = "dark";

  const setTheme = (schem = "dark") => {
    let el = document.querySelector("html");
    $_session.theme = schem;
    el.setAttribute("data-theme", schem);
  };

  const toggleTheme = () => {
    if (_schema === "dark") {
      _schema = "light";
    } else {
      _schema = "dark";
    }

    setTheme(_schema);
  };

  onMount(() => {
    if ($_session && $_session.theme) {
      _schema = $_session.theme;
    }

    setTheme(_schema);
  });
</script>

<a href="#/" on:click|preventDefault={toggleTheme}>
  {#if _schema === "dark"}
    {@html icon1}
  {:else}
    {@html icon2}
  {/if}
</a>
