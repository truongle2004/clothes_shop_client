<script setup>
import router from '@/router'

const handleRoute = () => {
  router.push({
    path: '/home'
  })
}
</script>

<template>
  <div class="container-fluid p-0">
    <div class="hero-img mb-4">
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/07/cold-weather_generic-hp_1440x698_uk.jpg"
        alt="ASOS Cold Weather"
        class="img-fluid w-100"
      />
    </div>

    <div class="text-center mb-5">
      <h1>The Biggest Labels</h1>
    </div>

    <div class="row justify-content-center g-4 mb-5">
      <div class="col-6 col-md-3">
        <img
          src="https://images.asos-media.com/products/asos-design-asymmetric-half-wrap-shirt-with-front-button-detail-in-cut-about-stripe/206282991-1-cutaboutstripe?$n_640w$&wid=513&fit=constrain"
          alt="Asymmetric Half-Wrap Shirt"
          class="img-fluid"
        />
      </div>
      <div class="col-6 col-md-3">
        <img
          src="https://images.asos-media.com/products/nike-v2k-run-unisex-trainers-in-white-and-silver/204906286-1-white?$n_640w$&wid=513&fit=constrain"
          alt="Nike V2K Run Trainers"
          class="img-fluid"
        />
      </div>
      <div class="col-6 col-md-3">
        <img
          src="https://images.asos-media.com/products/asos-design-tie-front-textured-peplum-top-in-leopard-print/206623531-1-black?$n_640w$&wid=513&fit=constrain"
          alt="Tie-Front Peplum Top"
          class="img-fluid"
        />
      </div>
      <div class="col-6 col-md-3">
        <img
          src="https://images.asos-media.com/products/topshop-satin-and-lace-cami-midi-dress-in-ivory-and-lime/204107152-1-ivoryandlime?$n_640w$&wid=513&fit=constrain"
          alt="Satin and Lace Midi Dress"
          class="img-fluid"
        />
      </div>
    </div>

    <div class="d-flex justify-content-center gap-4 mt-10 mb-5">
      <div class="text-center">
        <img
          src="https://content.asos-media.com/-/media/homepages/ww/2024/september/30-gbl/ww_global_topshop_moment_870x1110.jpg"
          class="img-fluid mb-3"
          style="width: 495px; height: 635px"
        />

        <div>
          <h1>
            <strong> TOPSHOP </strong>
          </h1>
          <p>Autumn, unlocked</p>
        </div>

        <button
          type="button"
          class="btn btn-outline-secondary rounded"
          style="width: 137px; height: 56px"
          @click="handleRoute"
        >
          Shop now
        </button>
      </div>
      <div class="text-center">
        <img
          src="https://content.asos-media.com/-/media/homepages/ww/2024/september/30-gbl/ww_global_romantics_moment_870x1110.jpg"
          class="img-fluid mb-3"
          style="width: 495px; height: 635px"
        />

        <div>
          <h1>
            <strong> ROMANTIC</strong>
          </h1>
          <p>Frills forever</p>
        </div>
        <button
          type="button"
          class="btn btn-outline-secondary"
          style="width: 137px; height: 56px"
          @click="handleRoute"
        >
          Shop now
        </button>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center text-wrap">
    <h3>TRENDING BRANDS</h3>
    <div style="display: flex; height: 200px">
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg"
        alt="brand-1"
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png"
        alt="bran-2"
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png"
        alt="brand-3"
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg"
        alt="brand-4"
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg"
        alt="brand-5"
      />
      <img
        src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg"
        alt="brand-6"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-img img {
  max-height: 500px;
  object-fit: cover;
}
</style>
