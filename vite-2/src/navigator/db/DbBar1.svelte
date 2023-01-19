<script>
  const icon1 = `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 17H22L18 21L14 17H17V3H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z" /></svg>`;
  const icon2 = `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z" /></svg>`;
  export let label = "HT-Teaser";
  export let filter = { col: "titel", asc: true };
  export let options = [
    { val: "titel", title: "Titel" },
    { val: "id", title: "Index" },
  ];
</script>

<div class="bar">
  <h1>{label}</h1>
  <p>Sort</p>
  <div class="flex-row">
    <fieldset>
      <select bind:value={filter.col}>
        {#each options as { val, title }}
          <option value={val}> {title} </option>
        {/each}
      </select>
    </fieldset>
    <fieldset>
      <label role="button" for="switch2">
        <input
          bind:checked={filter.asc}
          type="checkbox"
          id="switch2"
          name="switch2"
          role="switch"
          class="visually-hidden"
        />
        {#if filter.asc}
          {@html icon1}
        {:else}
          {@html icon2}
        {/if}
      </label>
    </fieldset>
  </div>
</div>

<style>
  .bar {
    --h1-color: var(--color);
    background-color: var(--background-color);
    color: var(--color);
    margin-bottom: var(--typography-spacing-vertical);
    box-shadow: var(--card-box-shadow);
    padding: var(--spacing);
    border-radius: var(--border-radius);
  }
  .bar h1,
  .bar p {
    margin-bottom: 0.5rem;
  }
  .flex-row {
    display: flex;
    align-items: center;
  }
  .flex-row fieldset,
  .flex-row select {
    margin: 0;
  }
  .flex-row [role="button"] {
    margin: 0;
  }
  .flex-row fieldset:nth-child(1) {
    flex: 1 1 auto;
    margin-right: 0.5rem;
  }
</style>
