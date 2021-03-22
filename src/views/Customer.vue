<template>
  <router-link data-cy="edit" class="pure-button button-secondary"
    >Redigera</router-link
  >
  <button data-cy="del" class="pure-button button-danger">Ta bort</button>
  <CustomerForm />
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "Customer",
  components: {
    CustomerForm,
  },
};
</script>

<style scoped>
.pure-button {
  margin: 0.5em;
}

.button-danger {
  background: rgb(202, 60, 60);
}

.button-secondary {
  background: rgb(66, 184, 221);
}
</style>
