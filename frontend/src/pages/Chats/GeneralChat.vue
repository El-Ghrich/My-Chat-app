<template>
<div class="flex justify-center">

   <div class="flex flex-col h-180 w-160 border rounded-[20px] bg-gray-50">
    <!-- Messages Display (Scrollable) -->
    <div class="flex-1 p-4 ">
      <div 
        v-for="(message, index) in messages" 
        :key="index"
        class="mb-3"
        :class="message.isUser ? 'text-right' : 'text-left'"
      >
        <div 
          class="inline-block px-4 py-2 rounded-2xl max-w-xs"
          :class="message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'"
        >
          {{ message.text }}
        </div>
      </div>
    </div>

    <!-- Input & Send Button -->
    <div class="p-4 border-t rounded-b-[20px] flex gap-2 bg-white">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
        class="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        @click="sendMessage"
        class="px-4 py-2 font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { io } from 'socket.io-client';




const messages = ref([
  { text: "Hello! How can I help you?", isUser: false },
  { text: "Hi! I need some advice.", isUser: true }
]);

const newMessage = ref('');

const socket = io("http://127.0.0.1:3000/");
const sendMessage = ()=>{
    if (newMessage.value.trim() == '') return;
     socket.emit('SendMessage' , {newMessage : newMessage.value, date: Date.now()})

    displayMessage(newMessage.value, true)
    newMessage.value = '';
}

const displayMessage = (msg, isuser)=>{
    messages.value.push({
        text: msg, isUser: isuser
    })
}

socket.on('received message', message =>{
    console.log('mesage received')
    displayMessage(message, false)
})

</script>

<style scoped>
</style>