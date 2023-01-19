<script>
  export let open = false;
  export let payload;
  // id,titel,img_p,img_f,file_o,info
  const close = () => {
    open = false;
  };
</script>

<dialog {open}>
  <article>
    <a
      href="#close"
      aria-label="Close"
      class="close"
      on:click|preventDefault={close}
    />

    {#if payload}
      <div class="content">
        <h2>{payload.titel ? payload.titel : "Daten"}</h2>
        <div>{payload.info}</div>
        <figure><pre>{JSON.stringify(payload, null, 2)}</pre></figure>
        <figure><img src="{payload.img_p}{payload.img_f}" alt=""></figure>
      </div>
    {:else}
      <slot />
    {/if}

    <footer>
      <slot name="footer"
        ><!-- <a href="#/confirm" role="button" on:click|preventDefault={close}
        >Confirm</a
      > --></slot
      >
      <a
        on:click|preventDefault={close}
        href="#/cancel"
        role="button"
        class="secondary">Cancel</a
      >
    </footer>
  </article>
</dialog>

<style>
  .content h2 {
    margin-bottom: 1rem;
  }
  .content div, .content figure {
    margin-bottom: 1rem;
  }
</style>
