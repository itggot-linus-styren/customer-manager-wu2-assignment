<template>
  <table class="pure-table">
    <thead>
      <th>Förnamn</th>
      <th>Efternamn</th>
      <th>E-mail</th>
      <th></th>
    </thead>
    <tbody>
      <tr>
        <td>Namn</td>
        <td>Namnsson</td>
        <td>namn.namnsson@gmail.com</td>
        <td>
          <router-link class="pure-button">Visa</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CustomerTable",
};
</script>

<style>
table {
  width: 100%;
  text-align: left;
}
</style>
