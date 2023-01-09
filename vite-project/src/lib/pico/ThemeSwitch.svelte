<script>
  import { onMount } from "svelte";
  import { _session } from "../data";
  export let role = "link";
  export let label = "Theme";
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
    {label}
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
