<script>
  import { db } from "./firestore.js";

  export let id = "";
  export let user = {};

  const deleteUser = () => {
    db.collection("users").doc(id).delete();
  };

  const updateUser = () => {
    db.collection("users").doc(id).update({
      email: user.email,
      name: user.name,
    });
  };
</script>

<div class="user">
  <input on:blur={updateUser} type="text" bind:value={user.email} />
  <input on:blur={updateUser} type="text" bind:value={user.name} />
  <button on:click={deleteUser}>🗑️</button>
</div>

<style>
  .user {
    display: grid;
    grid-template-columns: 3fr 10fr 3fr;
    gap: 10px;
  }
</style>
