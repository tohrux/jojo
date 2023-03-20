<template>
  <div class="video-container">
    <video ref="videoElement" @ended="onVideoEnded" @loadedmetadata="onMetadataLoaded" :src="videoSrc" autoplay muted></video>
    <button v-if="showReplayButton" class="replay-button" @click="replayVideo">重播</button>
  </div>
</template>

<script>
export default {
  name: 'CustomVideo',
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showReplayButton: false,
    }
  },
  watch: {
    videoSrc() {
      this.showReplayButton = false
      this.$refs.videoElement.load()
      this.$refs.videoElement.play()
    },
  },
  methods: {
    onVideoEnded() {
      this.showReplayButton = true
    },
    onMetadataLoaded() {
      this.$refs.videoElement.play()
    },
    replayVideo() {
      this.showReplayButton = false
      this.$refs.videoElement.play()
    },
  },
}
</script>

<style scoped>
.video-container {
  position: relative;
  display: inline-block;
}

.replay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.replay-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
