<script>
  import SignOut from "./SignOut.svelte";
  import { _user, _profile, supabase } from "../data";
  let email = "",
    password = "",
    loading = false;
  const resetForm = async () => {
    email = "";
    password = "";
  };
  const signIn = async () => {
    loading = true;
    try {
      let { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      alert("Error Login!");
    } finally {
      await resetForm();
      loading = false;
    }
  };
  const signOut = async () => {
    loading = true;
    try {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert("Error Logout!");
    } finally {
      loading = false;
    }
  };
  let open;
  const close = () => {
    open = !open;
  };
</script>

<section class="container">
  <article class="grid">
    {#if $_user}
      <div>
        {#if $_profile}
          <hgroup>
            <h1>User Panel</h1>
            <h2>{$_profile.username}</h2>
          </hgroup>
          <table class="table table-primary">
            <tbody>
              <tr class="">
                <td scope="row">Email</td>
                <td>{$_user.email}</td>
              </tr>
              <tr class="">
                <td scope="row">Website</td>
                <td>{$_profile.website}</td>
              </tr>
              <tr class="">
                <td scope="row">Level</td>
                <td>{$_profile.level}</td>
              </tr>
              <tr class="">
                <td scope="row">User Id</td>
                <td>{$_profile.id}</td>
              </tr>
            </tbody>
          </table>
        {/if}

        <button class="contrast" on:click={() => (open = true)}>Logout</button>
      </div>
    {:else}
      <div>
        <hgroup>
          <h1>Sign in</h1>
          <h2>A minimalist layout for Login pages</h2>
        </hgroup>
        <form on:submit|preventDefault={signIn}>
          <input
            type="email"
            name="email"
            bind:value={email}
            placeholder="Email"
            aria-label="Email"
            required
          />
          <input
            type="password"
            name="password"
            bind:value={password}
            placeholder="Password"
            aria-label="Password"
            required
          />
          <fieldset>
            <label for="remember">
              <input
                type="checkbox"
                role="switch"
                id="remember"
                name="remember"
              />
              Remember me
            </label>
          </fieldset>
          <button type="submit" class="contrast">Login</button>
        </form>
      </div>
    {/if}
    <div />
  </article>
</section>

<dialog id="modal-example" {open}>
  <article>
    <a
      href="#close"
      aria-label="Close"
      class="close"
      on:click|preventDefault={close}
    />
    <h3>Sign Out User</h3>
    <p>
      Lorem ipsum dolor sit commodi asperiores
      voluptas provident nostrum!
    </p>
    <footer>
      <a
        on:click|preventDefault={close}
        href="#/cancel"
        role="button"
        class="secondary">Cancel</a
      >
      <SignOut>
        <a href="#/confirm" role="button" on:click|preventDefault={close}
          >Confirm</a
        >
      </SignOut>
    </footer>
  </article>
</dialog>

<style>
  .grid > div:nth-of-type(2) {
    display: none;
    background-color: #374956;
    background-image: url("https://nwp-cgn.de/studio/upload/kat11/server/php/files/jc1.png");
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 992px) {
    .grid > div:nth-of-type(2) {
      display: block;
    }
  }
</style>
