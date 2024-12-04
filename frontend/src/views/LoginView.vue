<template>
    <div class="loginBox">
        <div class="loginContainer">
            <h1>Welcome to PostIt 2.0</h1>
            <p>Log In</p>
            <form v-on:submit.prevent="validatePassword">
                <input type="email" name="email" placeholder="Email" v-model="email" required class="loginInput" />
                <br />
                <input type="password" name="password" placeholder="Password" v-model="password" required
                    class="loginInput" />
                <br />
                <p v-if="errorMessage != ''" class="error">{{ errorMessage }}</p>
                <input @click="loginUser" type="submit" value="Log In" class="loginInput loginButton"/>
            </form>
            <a @click="redirectToSignup">or sign up here</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        redirectToSignup() {
            this.$router.push("/signup")
        },
        loginUser() {
            fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.errorMessage != undefined) {
                    this.errorMessage = data.errorMessage;
                    return;
                }

                this.$router.push("/")
            });
        }
    },
};
</script>

<style scoped>
.loginBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loginContainer {
    background-color: var(--box-background-color);
    border-radius: 10px;
    text-align: center;
    padding: 10px 10px 20px 10px;
    margin: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .1), 0px 8px 16px rgba(0, 0, 0, .1);
}

.loginContainer>h1 {
    margin: 10px;
}

.loginInput {
    margin: 5px;
    background-color: #ffffff;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px;
}

.loginButton {
    background-color: var(--button-color);
    color: white;
    font-weight: bold;
    margin-bottom: 20px;
    border-radius: 5px;
    margin-top: 20px;
}

.loginButton:hover {
    background-color: var(--hover-color);
}

.error {
    color: red;
    font-size: 0.9em;
    margin-bottom: 10px;
    text-align: center;
}

.error ul {
    margin: 0;
    padding-left: 20px;
}

@media (max-width: 330px) {
    .loginContainer {
        border-radius: 0px;
    }
}
</style>