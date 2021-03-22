<template>
  <CustomerForm editable @onSubmit="createCustomer" />
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "AddCustomer",
  components: {
    CustomerForm,
  },
};
</script>

<style></style>
