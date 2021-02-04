<template>
    <div class="auth">
        <form v-show="!showRegistration" class="auth-inner" @submit.prevent="login">
            <h2>LOGIN</h2>
            <div class="auth-field">
                <label for="emailLogin">Email</label>
                <input type="email" id="emailLogin"/>
            </div>
            <div class="auth-field">
                <label for="passwordLogin">Password</label>
                <input type="password" id="passwordLogin"/>
            </div>

            <button class="btn block" type="submit">
                LOGIN
            </button>
            <p class="text-center">
                No account yet? <button @click.prevent="showRegistration = true" class="btn text">REGISTER HERE</button>
            </p>
        </form>
        <form v-show="showRegistration" class="auth-inner" @submit.prevent="register">
            <h2>REGISTER</h2>
            <div class="auth-field">
                <label for="emailRegister">Email</label>
                <input type="email" id="emailRegister"/>
            </div>
            <div class="auth-field">
                <label for="passwordRegister">Password</label>
                <input type="password" id="passwordRegister"/>
            </div>
            <div class="auth-field">
                <label for="passwordConfirm">Confirm Password</label>
                <input type="password" id="passwordConfirm"/>
            </div>

            <button class="btn block" type="submit">
                REGISTER
            </button>
            <p class="text-center">
                Already have an account? <button @click.prevent="showRegistration = false" class="btn text">LOGIN HERE</button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data(){
        return {
            showRegistration: false,
        }
    },
    methods: {
        login(){
            this.$store.dispatch('login');
            this.$router.push('/');
        },
        register(){
            this.$store.dispatch('login');
            this.$router.push('/');
        }
    }
}
</script>