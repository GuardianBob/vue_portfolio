<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/JBear_Logo_No_Letters_Orange.svg"
      style="width: 300px; height: 300px"
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
