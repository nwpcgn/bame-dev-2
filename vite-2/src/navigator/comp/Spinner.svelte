<aside {...$$restProps}>
  <article aria-busy="true">
    <span>
      <slot>... loading</slot>
    </span>
  </article>
</aside>

<style>
  aside {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(51, 51, 51, var(--op, 0.5));
  }
</style>
