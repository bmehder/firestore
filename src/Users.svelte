<script>
  import { db } from "./firestore.js";
  import User from "./User.svelte";

  let users = [];
  let email = "";
  let name = "";

  db.collection("users")
    .orderBy("created")
    .onSnapshot((data) => (users = data.docs));

  const addUser = () => {
    const created = new Date().getTime();
    db.collection("users").add({
      created,
      email,
      name,
    });
    email = "";
    name = "";
  };
</script>

<div class="user">
  <form on:submit|preventDefault={addUser}>
    <input type="text" bind:value={email} placeholder="Email..." />
    <input type="text" bind:value={name} placeholder="Name..." />
    <button>➕</button>
  </form>
</div>

<hr />

<div id="users">
  {#each users as user}
    <User id={user.id} user={user.data()} />
  {/each}
</div>

<style>
  .user form {
    display: grid;
    grid-template-columns: 3fr 10fr 3fr;
    gap: 10px;
  }
</style>
