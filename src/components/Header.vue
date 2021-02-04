<template>
    <header :class="{'l-header':true, 'header' :true , 'fixed' : fixed }">
        <div class="l-container l-inner-header">
            <router-link to="/" class="header-logo">
                <img src="../assets/svgs/blog-logo.svg"/>
            </router-link>
            <template v-if="!isLoggedIn">
                <router-link v-if="currentRoute == 'Login'" class="btn text" to="/">
                    CLOSE
                </router-link> 
                <router-link v-else class="btn text" to="/login">
                    LOGIN
                </router-link> 
            </template>
            <template v-else>
                <a @click.prevent="logout" class="btn text">
                    LOGOUT
                </a>
            </template>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        isLoggedIn: function(){ return this.$store.getters.isLoggedIn },
        currentRoute: function(){ return this.$route.name}
    },
    props: {
        fixed: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        logout(){
             this.$store.dispatch('logout');
             if(this.currentRoute != 'Home'){
                this.$router.push('/');
             }
        }
    }
}
</script>