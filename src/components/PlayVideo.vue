<template>
  <a id="play_button" v-on:click="play" class="stretched-link"></a>
</template>

<script>
  export default {
    name: "PlayVideo",
    el: "play_button",
    methods: {
      play: function (event) {
        let videoEl = event.target.previousElementSibling;
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
    },
    data() {
      return {
        sources: [
          {
            filename: "100m",
            title : 'Z výšky 100m',
          },
          {
            filename: "150m",
            title : 'Z výšky 150m',
          },

        ]
      }
    }
  }
</script>

<style>
</style>
