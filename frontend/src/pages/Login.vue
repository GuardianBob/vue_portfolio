<template>
  <q-page>
    <div class="row justify-center text-center">
      <div class="col-6 q-mt-xl">
        <!-- <div class="col-12"> -->
          <img alt="Quasar logo" src="~assets/JBear_Logo_No_Letters_Orange.svg" style="width: 200px; height: 200px" class="q-mx-md">
        <!-- </div> -->
        <div class="col-8">
          <h4 class="q-my-md">Sign In</h4>
          <h4 v-if="error" style="color: red">
            Wrong Email/Password combination
          </h4>
          <v-btn v-if="error" style="background-color: #74c9cc !important" @click="$router.push('/forgot_password')">Forgot
            Password?</v-btn>
          <p v-if="!!error">{{ error.message }}</p>
          <q-input class="q-my-sm" background-color="white" label="Email" v-model="username" placeholder=" " type="email" required outlined
            dense></q-input>
          <q-input class="q-my-sm" background-color="white" label="Password" v-model="password" placeholder=" " type="password" required
            outlined dense></q-input>
          <!-- <q-page-container> -->
            <div class="row" no-gutters style="padding-bottom: 15px">
              <div class="col text-center">
                <q-btn color="primary" type="submit" style="width: 200px">
                  Sign in
                </q-btn>
              </div>
            </div>
          <!-- </q-page-container> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar";

export default defineComponent({
  name: 'LoginPage',
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
