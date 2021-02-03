<template>
  <div>
      <Carousel />
      <div class="l-container">
        <h1>NEWS</h1>
        <div class="post-grid l-grid">
          <div v-for="n in 6" :key="n" class="l-grid-item">
            <Post/>
          </div>
        </div>
        <div class="l-grid justify-center">
            <div class="l-grid-item ">
              <a href="#" class="btn block">
                LOAD MORE
              </a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Post
  }
}
</script>
