<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="btn btn-light" on:click={increment}>
  count is {count}
</button>
