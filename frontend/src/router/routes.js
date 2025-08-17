import LoginPage from '@/pages/auth/LoginPage.vue';
import home from '@/pages/dashboard/home.vue';
import GeneralChat from '@/pages/Chats/GeneralChat.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { requiresGuest: true },
  },
  {
    path: '/',
    name: 'home',
    component: home,
    meta: { requiresGuest: true },
  },
  {
    path: '/chat',
    name: 'GeneralChat',
    component: GeneralChat,
    meta: { requiresGuest: true },
  },
 
];

export default routes