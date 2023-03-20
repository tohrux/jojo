<template>
  <div id="app">
    <custom-video :videoSrc="currentSrc"></custom-video>
    <input v-model="inputSrc" @change="updateSrc" placeholder="输入新视频链接">
  </div>
</template>

<script>
import CustomVideo from '@/components/CustomVideo.vue';

export default {
  name: 'App',
  components: {
    CustomVideo
  },
  data() {
    return {
      currentSrc: 'https://www.example.com/video.mp4',
      inputSrc: ''
    };
  },
  methods: {
    updateSrc() {
      this.currentSrc = this.inputSrc;
      this.inputSrc = '';
    }
  }
};
</script>
