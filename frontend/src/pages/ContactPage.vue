<template>
  <q-page class="items-center">
    <!-- <div class="row flex flex-center q-mt-xl q-mb-sm">
        <img alt="JBear Creations" src="~assets/JBear_Logo_front_Orange.png" style="width: 25%;">
        <img alt="JBear Creations" src="~assets/JBear_Logo_Saw_Orange.png" style="width: 25%;" class="big-saw" @click="spin_saw">
        <img alt="JBear Creations" src="~assets/JBear_Logo_back_Orange.png" style="width: 25%;">
    </div> -->
    <div class="row justify-center items-center">
      <div class="col-5 text-center">
        <h6 class="q-mb-md " style="font-family:'Splash';">Reach out!</h6>
        <q-form target="_blank" action="https://formsubmit.co/calisurfr22@yahoo.com" method="POST">
          <!-- <div style="max-width: 300px"> -->
            <!-- <div class="form-row"> -->
              <!-- <div class="col"> -->
                <q-input dense type="text" outlined v-model="name" label="Full Name" name="name" required class="q-py-xs"/>
              <!-- </div> -->
              <!-- <div class="col"> -->
                <q-input dense type="email" outlined v-model="email" label="Email Address" name="email" required class="q-py-xs"/>
                <q-input dense type="text" outlined v-model="subject" label="Subject" name="subject" required class="q-py-xs"/>
              <!-- </div> -->
            <!-- </div> -->
          <!-- </div> -->
          <div class="form-group">
            <q-input type="textarea" dense outlined v-model="message" label="Message" name="message" required class="q-py-xs"/>
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="notice" outline class="q-ml-sm" />
          </div>
        </q-form>
      </div>
      <div class="col-5 text-center">
        <q-img
        src="~assets/images/mailbox.svg"
        spinner-color="white"
        style="height: 300px; max-width: 400px"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify, colors, setCssVar } from "quasar";
import { gsap } from "gsap";

export default defineComponent({
  name: 'ContactPage',
  data() {
    return {
      savedTheme: 'dark_theme',
      saw: 0,
      name: ref(""),
      email: ref(""),
      subject: ref(""),
      message: ref("")
    };
  },
  methods: {
    async spin_saw() {
      console.log("spin!")
      this.saw = this.saw - 3600
      gsap.to(".big-saw", {
        duration: 1,
        rotation: this.saw
      });
    },

  },
  mounted() {
  },
  
})
</script>