import LoginPage from '@/pages/auth/LoginPage.vue';
import home from '@/pages/dashboard/home.vue';

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
 
];

export default routes