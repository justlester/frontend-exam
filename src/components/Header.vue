<template>
    <header class="l-header">
        <div class="l-container l-inner-header">
            <router-link to="/" class="header-logo">
                <img src="../assets/svgs/blog-logo.svg"/>
            </router-link>
            <router-link v-if="this.$route.name == 'Login'" class="btn text" to="/">
                CLOSE
            </router-link> 
            <router-link v-else class="btn text" to="/login">
                LOGIN
            </router-link> 
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>