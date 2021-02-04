<template>
    <div class="l-container">
        <h1 class="section-title">NEWS</h1>
        <div class="post-grid">
          <div v-for="n in 6" :key="n" class="post-grid-item">
            <Post/>
          </div>
        </div>
        <div class="post-grid justify-center">
            <div class="post-grid-item">
              <a href="#" class="btn block">
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
}
</script>