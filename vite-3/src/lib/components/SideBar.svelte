<script>
  import url from "../utils/url";
  import {
    Page,
    Navbar,
    Link,
    List,
    ListItem,
    Radio,
    Toggle,
    BlockTitle,
  } from "konsta/svelte";
  export let leftPanelOpened = false;
  let darkMode;
  const openL = () => {
    leftPanelOpened = true;
  };
  const closeL = () => {
    leftPanelOpened = false;
  };
  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark");
    leftPanelOpened = false;
  };
</script>

<Page>
  <Navbar title="User Bar">
    <Link slot="right" navbar onClick={closeL}>
      Close
    </Link>
  </Navbar>
  <BlockTitle>Pages</BlockTitle>
  <List class="hairline-b">
    <ListItem href="#/" link title="Home" onClick={closeL} />
    <ListItem href="#/app" link title="Application" onClick={closeL} />
    <ListItem groupTitle title="User" onClick={closeL} />
    <ListItem href="#/settings" link title="Settings" onClick={closeL} />
    <ListItem link title="Logout" onClick={closeL} />
  </List>
    <BlockTitle>Dark Mode</BlockTitle>
  <List class="relative hairline-b">
    <ListItem title="Dark Mode">
      <Toggle
        slot="after"
        onChange={() => toggleDarkMode()}
        checked={darkMode}
      />
    </ListItem>
  </List>
</Page>
