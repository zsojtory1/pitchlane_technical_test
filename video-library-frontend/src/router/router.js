// src/router/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import VideoUpload from '@/components/VideoUpload.vue';
import VideoList from '@/components/VideoList.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  routes,
});

export default router;
