<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/JBear_Logo_Wide_Orange.svg"
      style="width: 80%;"
    >
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar";


export default defineComponent({
  name: 'IndexPage',
  data() {
    const $q = useQuasar();
    $q.dark.set(true);
    return {
    };
  },
  methods: {},
  mounted() {
  },
  
})
</script>
