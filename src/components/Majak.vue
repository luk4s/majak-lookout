<template>
  <div id="majak" class="text-center">
    <h1>Rozhledna Bežerovice
      <small class="text-muted">– nejvyšší výhled v České republice</small>
    </h1>

<p class="lead">
  První bezbariérová interaktivní rozhledna s možností cestování v čase. Zde Vás neohrozí ani mlha, ani déšť
</p>

    <div class="row">
      <div v-for="item in sources" v-bind:key="item.id" class="col-6 majak-view">
        <div class="row no-gutters position-relative">
          <div class="col-md-12 position-static p-4 pl-md-0">
            <h5 class="mt-0">{{ item.title }}</h5>
            <video :src="'/videos/' + item.filename + '.MP4'" :poster="'/videos/thumbnails/' + item.filename + '.png'" width="480"></video>
<!--            <a onclick="let v= this.previousElementSibling;v.load();v.play()" class="stretched-link"></a>-->
            <PlayVideo></PlayVideo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayVideo from './PlayVideo.vue';

  export default {
    name: "Majak",
    el: "majak",
    components: {
      PlayVideo
    },
    data() {
      return {
        sources: [
          {
            filename: "13m",
            title : 'Z výšky 13m',
          },
          {
            filename: "26m",
            title : 'Z výšky 26m',
          },
          {
            filename: "50m",
            title : 'Z výšky 50m',
          },
          {
            filename: "100m",
            title : 'Z výšky 100m',
          },
          {
            filename: "150m",
            title : 'Z výšky 150m',
          },
          {
            filename: "244m",
            title : 'Z výšky 244m',
          },

        ]
      }
    }
  }
</script>

<style>
</style>
