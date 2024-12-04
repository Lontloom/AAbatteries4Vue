<template>
    <div class="loginBox">
        <div class="loginContainer">
            <h1>Welcome to PostIt 2.0</h1>
            <p>Create an account</p>
            <form v-on:submit.prevent="validatePassword">
                <input type="email" name="email" placeholder="Email" v-model="email" required class="loginInput" />
                <br />
                <input type="password" name="password" placeholder="Password" v-model="password" required
                    class="loginInput" />
                <br />
                <span v-if="errorMessages.length > 0" class="error">
                    The password is not valid:
                    <ul>
                        <li v-for="(error, index) in errorMessages" :key="index">{{ error }}</li>
                    </ul>
                </span>
                <input type="submit" value="Signup" class="loginInput loginButton" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignupView",
    data() {
        return {
            email: "",
            password: "",
            errorMessages: [],
        };
    },
    methods: {
        signupUser() {
            fetch("http://localhost:3000/auth/signup", {
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
            .then(async response => {
                if (response.ok) {
                    this.$router.push("/")
                    return;
                }

                console.log(await response.json());
            });
        },
        validatePassword() {
            this.errorMessages = [];
            const password = this.password;

            if (password.length < 8 || password.length > 15) {
                this.errorMessages.push("The password must be between 8 and 15 characters long.");
            }
            if (!/^[A-Z]/.test(password)) {
                this.errorMessages.push("The password must start with an uppercase alphabet.");
            }
            if (!/[A-Z]/.test(password)) {
                this.errorMessages.push("The password must include at least one uppercase alphabet character.");
            }
            if (!/(.*[a-z].*[a-z])/.test(password)) {
                this.errorMessages.push("The password must include at least two lowercase alphabet characters.");
            }
            if (!/\d/.test(password)) {
                this.errorMessages.push("The password must include at least one numeric value.");
            }
            if (!/_/.test(password)) {
                this.errorMessages.push('The password must include the character "_".');
            }

            if (this.errorMessages.length === 0) {
                this.signupUser();
            }
        },
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
    text-align: left;
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