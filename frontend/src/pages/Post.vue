<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-10" v-if="post">
        <div class="col text-center"><h3>{{ post.title.rendered }}</h3></div>
        <div class="col" id="post"></div>
        <div class="col" id="post2"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar, Notify } from "quasar"
import APIService from "../../services/api"
import ParseWP from "../../services/parseWP"
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'

export default defineComponent({
  name: 'LoginPage',
  data() {
    // const $q = useQuasar();
    // $q.dark.set(true);
    return {
      post_id: null,
      image: '',
      post: null,
      images: [],
      text: [],
    };
  },
  methods: {

    async get_post(id) {
      await APIService.get_post(id).then(async (results) => {
        let post = results.data;
        console.log(post);
        this.post = post;
        ParseWP.format_post(post.content.rendered).then((results) => {
          document.getElementById("post").innerHTML = results
          let update_post = document
          ParseWP.format_post_2(update_post).then((new_code) => {
            document.getElementById("post2").innerHTML = new_code
          });
        });
        await APIService.get_media(post.featured_media).then((media) => {
          this.image = media.data.source_url
          Prism.highlightAll()
        })
      })

    },
  },
  mounted() {
    const url = window.location.href;
    console.log(url)
    let post_id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    if (post_id == '') {
      post_id = window.location.href.substring(window.location.href.lastIndexOf('/') - 1)
      post_id = post_id.replace(/\//g, '')
    }
    console.log(post_id)
    this.post_id = post_id;
    this.get_post(post_id);
    Prism.highlightAll()
  },
})
</script>
