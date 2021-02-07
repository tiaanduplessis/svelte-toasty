<script>
  import {
    ToastContainer,
    success,
    danger,
    warning,
    info,
    toast
  } from "./svelte-toasty";

  const icons = {
    danger: "😢",
    success: "😀",
    warning: "😟",
    info: "🙂",
    default: "😐"
  };
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: #1a202c;
    color: #fff;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border: none;
    font-size: 1.25rem;
    border-radius: 0.25rem;
    font-family: inherit;
    margin-bottom: 1rem;
  }

  .icon {
    margin-right: 0.5rem;
  }

  .close {
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    margin: 0;
    margin-left: 1rem;
  }
</style>

<ToastContainer let:toast let:remove>
  <div slot="icon" class="icon">{icons[toast.type]}</div>
  <div slot="actions">
    {#if toast.withClose}
      <button type="button" on:click={remove} class="close">Close</button>
    {/if}
  </div>
</ToastContainer>
<main class="container">

  <h1>svelte-toasty</h1>

  <section class="container" aria-labelledby="types-title">
    <h2 id="types-title">Types</h2>
    <button
      type="button"
      on:click={() => success('This will show for 10 seconds', 10000)}>
      Show success toast
    </button>
    <button
      type="button"
      on:click={() => danger('This will show for 2 seconds', 2000)}>
      Show danger toast
    </button>
    <button
      type="button"
      on:click={() => warning('This will show for 3 seconds')}>
      Show warning toast
    </button>
    <button
      type="button"
      on:click={() => info('This will show for 6 seconds', 6000)}>
      Show info toast
    </button>
  </section>

  <section aria-labelledby="actions-title">
    <h2 id="types-title">With actions</h2>
    <button
      type="button"
      on:click={() => toast({
          text: 'This can be closed',
          withClose: true,
          timeout: 20000
        })}>
      Show with close
    </button>
  </section>

</main>
