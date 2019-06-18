<template>
  <a id="play_button" v-on:click="play" class="stretched-link"></a>
</template>

<script>
  export default {
    name: "PlayVideo",
    methods: {
      play: function (event) {
        let videoEl = event.target.previousElementSibling;
        if (!videoEl)
          return;

        if (videoEl.requestFullscreen) {
          videoEl.requestFullscreen();
        } else if (videoEl.mozRequestFullScreen) {
          videoEl.mozRequestFullScreen();
        } else if (videoEl.webkitRequestFullscreen) {
          videoEl.webkitRequestFullscreen();
        } else if (videoEl.msRequestFullscreen) {
          videoEl.msRequestFullscreen();
        }
        videoEl.onended = () => {
          document.exitFullscreen()
        };
        videoEl.load();videoEl.play()

      }
    }
  }
</script>

<style>
</style>
