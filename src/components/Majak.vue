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
          <div class="position-static m-4 p-2 video-wrapper">
            <h5 class="mt-0">{{ item.title }}</h5>
            <video :src="'/videos/' + item.filename + '.MP4'" :poster="'/videos/thumbnails/' + item.filename + '.png'"
                   width="480"></video>
            <PlayVideo></PlayVideo>
          </div>
      </div>
    </div>

    <p>
      <b>
        Vstup na vlastní nebezpečí. Provozovatel nenese odpovědnost za zranění při výstupu a sestupu ani za závratě a jiné psychické potíže způsobené použitím rozhledny.
      </b>
    </p>
  </div>
</template>

<script>
  import PlayVideo from './PlayVideo.vue';

  export default {
    name: "Majak",
    components: {
      PlayVideo
    },
    data() {
      return {
        sources: [
          {
            filename: "13m",
            title: 'Z výšky 13m',
          },
          {
            filename: "Jaro",
            title: "Jaro"
          },
          {
            filename: "26m",
            title: 'Z výšky 26m',
          },
          {
            filename: "Leto",
            title: "Léto"
          },
          {
            filename: "50m",
            title: 'Z výšky 50m',
          },
          {
            filename: "Podzim",
            title: "Podzim"
          },
          {
            filename: "100m",
            title: 'Z výšky 100m',
          },
          {
            filename: "Zima",
            title: "Zima"
          },
          {
            filename: "150m",
            title: 'Z výšky 150m',
          },
          {
            filename: "244m",
            title: 'Z výšky 244m',
          },

        ]
      }
    }
  }
</script>

<style>
</style>
