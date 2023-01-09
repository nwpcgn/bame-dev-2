<script>
  import NavBar from './NavBar.svelte';
  import {appData, pageData} from "../lib/data"
  import { Router, Route, Link, createHistory } from "svelte-navigator";
  import createHashSource from "./hashHistory";
  const hash = createHistory(createHashSource());
  import Start from "./Start.svelte";
  import About from "./About.svelte";
  import Db from "./Db.svelte";
  import TransitionContainer from "./TransitionContainer.svelte";
  import RouteTransition from "./RouteTransition.svelte";
</script>



<Router history={hash}>
	<NavBar></NavBar>
  

  <TransitionContainer>
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
    <Route path="/db">
      <RouteTransition x={200} duration={900}>
        <Db {...pageData[2]} />
      </RouteTransition>
    </Route>
  </TransitionContainer>
</Router>
