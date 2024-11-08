<template>
    <div class="loginBox">
            <div class="loginContainer">
                <h1>Welcome to PostIt 2.0</h1>
                <p>Create an account</p>
                <form action="#">
                    <input type="email" name="email" placeholder="Email" required class="loginInput">
                    <br>
                    <input type="password" name="password" placeholder="Password" required class="loginInput">
                    <br>
                    <input type="submit" value="Signup" class="loginInput loginButton">
                </form>
            </div>
        </div>
</template>

<script>
export default {
name: 'SignupView',
}
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

@media (max-width: 330px){
    .loginContainer {
        border-radius: 0px;
    }
}
</style>
  