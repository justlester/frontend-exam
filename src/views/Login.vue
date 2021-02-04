<template>
  <div>
      <Auth />
      <PostGrid />
    </div>
</template>

<script>
import Auth from '@/components/Auth.vue'
import PostGrid from '@/components/PostGrid.vue'

export default {
  name: 'Login',
  components: {
    Auth,
    PostGrid
  },
}
</script>
