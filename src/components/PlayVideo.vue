<template>
  <a id="play_button" v-on:click="play($event.target.previousElementSibling)" class="stretched-link"></a>
</template>

<script>
  export default {
    name: "PlayVideo",
    methods: {
      play(videoEl) {
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
