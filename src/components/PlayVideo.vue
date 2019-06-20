<template>
  <a id="play_button" v-on:click="play($event.target)" class="stretched-link"></a>
</template>

<script>
  export default {
    name: "PlayVideo",
    methods: {
      play(btn) {
        let videoEl = btn.parentElement.querySelector('video');
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
