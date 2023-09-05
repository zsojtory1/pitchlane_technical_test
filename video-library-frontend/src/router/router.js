// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import VideoUpload from '@/components/VideoUpload.vue';
import VideoList from '@/components/VideoList.vue';

const routes = [
  {
    path: '/',
    component: VideoUpload,
  },
  {
    path: '/video-list',
    component: VideoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
