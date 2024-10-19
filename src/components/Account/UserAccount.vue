<script setup>
import AvatarAccount from './Avatar/AvatarAccount.vue'
import SidebarMenu from './Sidebar/SidebarMenu.vue'
import SidebarContent from './Sidebar/SidebarContent.vue'
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

    <div style="width: 500px">
      <SidebarContent />
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>
