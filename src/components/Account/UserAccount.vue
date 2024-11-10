<script setup>
import AvatarAccount from './Avatar/AvatarAccount.vue'
import SidebarMenu from './Sidebar/SidebarMenu.vue'
</script>

<template>
  <div class="container d-flex gap-5 mt-5 flex-row" style="align-items: flex-start">
    <div class="d-flex flex-column" style="width: 300px">
      <div>
        <AvatarAccount />
      </div>
      <div>
        <SidebarMenu />
      </div>
    </div>

    <div class="container-side-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container-side-content {
  width: 500px;
  padding: 20px;
  background-color: #f0f8ff;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
