<template>
  <a id="play_button" v-on:click="play" class="stretched-link"></a>
</template>

<script>
  export default {
    name: "PlayVideo",
    methods: {
      play(event) {
        let videoEl = event.target.previousElementSibling;
        if (!videoEl)
          return;

        if (videoEl.requestFullscreen) {
          videoEl.requestFullscreen();
        }
        videoEl.onended = () => {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          }
        };
        videoEl.load();
        videoEl.play()
      }
    }
  }
</script>

<style>
</style>
