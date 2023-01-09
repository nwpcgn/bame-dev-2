<main class="page-wrapper">
  <slot />
</main>

<style>
  :global(.page-wrapper) {
    position: relative;
    width: 100%;
    min-height: calc(100vh - var(--app-bar-height));
  }
  /* :global(.page-wrapper > .page) {
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  } */
</style>
