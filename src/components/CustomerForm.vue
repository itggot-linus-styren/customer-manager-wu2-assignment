<template>
  <form data-cy="form" class="pure-form">
    <fieldset class="pure-group">
      <legend>Kundinformation</legend>
      <input type="text" class="pure-input-1" placeholder="Förnamn" />
      <input type="text" class="pure-input-1" placeholder="Efternamn" />
      <input type="email" class="pure-input-1" placeholder="E-mail" />
    </fieldset>
    <button type="submit" class="pure-button pure-button-primary">Skapa</button>
  </form>
</template>

<script>
export default {
  name: "CustomerForm",
};
</script>

<style scoped>
input[readonly] {
  color: white;
}

form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
