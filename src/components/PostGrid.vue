<template>
    <div class="l-container">
      <div class="section-title-row">
        <h1 class="section-title">NEWS</h1>
        <router-link v-if="isLoggedIn" class="btn text text-underlined" to="/create-new-post">
          Create New Post
        </router-link> 
      </div>
      <div class="post-grid">
        <div v-for="n in posts" :key="n" class="post-grid-item">
          <Post/>
        </div>
      </div>
      <div class="post-grid justify-center">
          <div class="post-grid-item">
            <a @click.prevent="loadMore" href="#" class="btn block">
              LOAD MORE
            </a>
          </div>
      </div>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'PostGrid',
  components: {
    Post
  },
  data(){
    return {
      posts: 6
    }
  },
  computed: {
        isLoggedIn: function(){ return this.$store.getters.isLoggedIn },
  },
  methods: {
    loadMore(){
      this.posts = this.posts + 6;
    }
  }
}
</script>