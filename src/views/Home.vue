<template>
  <div class="home">
    <h1>Kunder</h1>
    <div class="main">
      <hr />
      <CustomerSearchField />
      <CustomerTable />
    </div>
  </div>
</template>

<script>
import CustomerTable from "@/components/CustomerTable.vue";
import CustomerSearchField from "@/components/CustomerSearchField.vue";

export default {
  name: "Home",
  components: {
    CustomerTable,
    CustomerSearchField,
  },
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 4em;
}

.main {
  width: 100%;
}
</style>
