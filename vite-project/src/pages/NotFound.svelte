<script>
  import url from "../lib/utils/url";
  //  $: console.log($url.hash);
</script>

<section {...$$restProps}>
  <article class="article">
    <h1>Page not Found</h1>
    <p>
      Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
      ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit
      sapien. Nulla iaculis eros a elit pharetra egestas.
    </p>
    <p>
      <a href="#/" role="button">Go To Start</a>
    </p>
  </article>
</section>

<style>
  .article {
    text-align: center;
  }
  h1 {
    color: var(--primary);
  }
  p {
    color: var(--muted-color);
  }
</style>
