<script>
  import { onMount } from "svelte";
  import { _session } from "../data";
  export let role = "link";
  export let label = `<svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 17V3a7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/></svg>`;
  let open;
  let _schema = "dark";

  const setTheme = (schem = "dark") => {
    let el = document.querySelector("html");
    $_session.theme = schem;
    el.setAttribute("data-theme", schem);
    open = false;
  };

  onMount(() => {
    if ($_session && $_session.theme) {
      _schema = $_session.theme;
    }

    setTheme(_schema);
  });
</script>

<details role="list" dir="rtl" bind:open>
  <summary aria-haspopup="listbox" {role} class="secondary">
    {@html label}
  </summary>
  <ul role="listbox">
    <li>
      <a href="#/" on:click|preventDefault={() => setTheme("light")}>Light</a>
    </li>
    <li>
      <a href="#/" on:click|preventDefault={() => setTheme("dark")}>Dark</a>
    </li>
  </ul>
</details>
