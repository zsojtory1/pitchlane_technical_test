// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    videos: [
      { name: 'Video 1', shareableLink: '' },
      { name: 'Video 2', shareableLink: '' },
      // Add more videos as needed
    ],
  },
  mutations: {
    addVideo(state, newVideo) {
      state.videos.push(newVideo);
    },
  },
});
