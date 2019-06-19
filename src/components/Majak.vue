<template>
  <div id="majak" class="text-center">
    <header>
      <div class="jumbotron bg-transparent">
        <h1>Rozhledna Bežerovice
          <small class="text-muted">– nejvyšší výhled v České republice</small>
        </h1>
        <p class="lead">
          První bezbariérová interaktivní rozhledna s možností cestování v čase. Zde Vás neohrozí ani mlha, ani déšť
        </p>
        <p class="lead py-10">Prosíme, vyberte si roční období nebo výšku výhledu poklepáním</p>
      </div>
    </header>

    <div class="row">
      <div class="col-6"><h3>Různé výšky</h3></div>
      <div class="col-6"><h3>Roční období</h3></div>
    </div>
    <div class="row">
      <div :key="index" class="col-6 majak-view" v-for="(item, index) in sources">
        <div class="position-static my-4 video-wrapper">
          <h4 class="mt-0">{{item.title}}</h4>
          <video :src="`/videos/${item.filename}.MP4`"
                 :poster="`/videos/thumbnails/${item.filename}.png`"></video>
          <PlayVideo></PlayVideo>
        </div>
      </div>
    </div>

    <footer>
      <p>
        Vstup na vlastní nebezpečí. Provozovatel nenese odpovědnost za zranění při výstupu a sestupu ani za závratě a
        jiné psychické potíže způsobené použitím rozhledny.
      </p>
    </footer>
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
