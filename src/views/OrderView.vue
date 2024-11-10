<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isEmptyOrder = ref(true)

const router = useRouter()

const handleClickShopping = () => {
  router.push({ name: 'products' })
}
</script>
<template>
  <div v-show="isEmptyOrder">
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTggNC42NjdMMTYgMkg0TDIgNC42NjdWMThoMTZWNC42Njd6TTAgNGwzLTRoMTRsMyA0djE2SDBWNHoiLz4KICAgICAgICA8cGF0aCBkPSJNMCA0aDIwdjJIMHoiLz4KICAgICAgICA8cGF0aCBkPSJNOSAxLjExMWgydjRIOXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
    />
  </div>

  <div>
    <h1 class="title">My Order</h1>
  </div>

  <main>
    <div class="image icon">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHRpdGxlPkNsb3RoZXMgSGFuZ2VyPC90aXRsZT4KICA8ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTTIxIDE3LjY2N1YxNWgxYTEgMSAwIDEgMC0xLTFoLTJhMyAzIDAgMSAxIDQgMi44M3YuODM3TDM0IDI1djJIMTB2LTJsMTEtNy4zMzN6TTIyIDIwbC04IDVoMTZsLTgtNXoiLz4KICA8L2c+Cjwvc3ZnPgo="
        alt=""
      />
    </div>
    <div class="title">YOUR CURRENTLY HAVE NO ORDER</div>
    <div>
      <button class="btn btn-primary" @click="handleClickShopping">START SHOPPING</button>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
