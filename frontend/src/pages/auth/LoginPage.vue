<template>
    <div class="login-page">
        <form @submit.prevent="handleLogin" class="login-form">
            <h2>Login</h2>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    v-model="email"
                    required
                    autocomplete="username"
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    required
                    autocomplete="current-password"
                />
            </div>
            <button type="submit">Login</button>
            <p v-if="error" class="error">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
    error.value = ''
    // Replace with your actual login logic
    if (email.value === 'user@example.com' && password.value === 'password') {
        // Successful login
        // Redirect or update state as needed
        alert('Login successful!')
    } else {
        error.value = 'Invalid email or password'
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: #f5f6fa;
}
.login-form {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    width: 320px;
}
.form-group {
    margin-bottom: 1rem;
}
label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}
input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}
button {
    width: 100%;
    padding: 0.75rem;
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
}
button:hover {
    background: #2980b9;
}
.error {
    color: #e74c3c;
    margin-top: 1rem;
    text-align: center;
}
</style>