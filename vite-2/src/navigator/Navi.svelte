<script>
  import DbDetail from "./db/DbDetail.svelte";
  import NavBar from "./comp/NavBar.svelte";
  import { pageData } from "../lib/data";
  import { Router, Route, createHistory } from "svelte-navigator";
  import createHashSource from "../lib/utils/hashHistory";
  const hash = createHistory(createHashSource());
  import Start from "./Start.svelte";
  import About from "./About.svelte";
  import Db from "./db/Db.svelte";
  import TransitionContainer from "./comp/TransitionContainer.svelte";
  import RouteTransition from "./comp/RouteTransition.svelte";
</script>

<Router history={hash}>
  <NavBar />
  <main>
    <Route path="/">
      <RouteTransition x={200} duration={900}>
        <Start {...pageData[0]} />
      </RouteTransition>
    </Route>
    <Route path="/about">
      <RouteTransition x={200} duration={900}>
        <About {...pageData[1]} />
      </RouteTransition>
    </Route>

    <Route path="/db/*">
      <Route path="/">
        <RouteTransition x={200} duration={900}>
          <Db {...pageData[2]} />
        </RouteTransition>
      </Route>
      <Route path="/:pid" let:params>
        <RouteTransition x={200} duration={900}>
          <Db {...pageData[2]} {params} />
        </RouteTransition>
      </Route>
      <Route path="/:pid/:id" let:params>
        <RouteTransition x={200} duration={900}>
          <DbDetail {params} />
        </RouteTransition>
      </Route>
    </Route>
  </main>
</Router>

<style>
  .spacer {
    margin: 0;
    height: var(--app-bar-height);
  }
</style>
