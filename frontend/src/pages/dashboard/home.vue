<template>
    <div class="dashboard-home">
        <h1>Welcome to the Dashboard</h1>
        <p class="te">This is your home page.</p>
        <h1 class="text-3xl font-bold ">
            Hello world!
        </h1>
    </div>
</template>

<script setup>
import axios from 'axios';
import { io } from 'socket.io-client';


const socket = io("http://127.0.0.1:3000/");

const res = await axios.get('http://127.0.0.1:3000/hello')
console.log(res.data)
</script>

<style scoped>

</style>