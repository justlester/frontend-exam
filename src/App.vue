<template>
  <div id="app">
    <Header :fixed="isFixed"/>
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    isFixed(){
      return this.$route.name == 'Login' ||  this.$route.name == 'Home' ;
    }
  }
}
</script>
