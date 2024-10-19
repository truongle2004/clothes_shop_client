<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand">ASOS</a>
        <a class="navbar-brand women" href="/women">WOMEN</a>
        <a class="navbar-brand men" href="/men">MEN</a>
      </div>
      <div class="ms-3">
        <img
          src="https://i.pinimg.com/564x/26/d7/a7/26d7a73e700970b106225df8288ef0b7.jpg"
          alt="User Avatar"
          class="rounded-circle"
          width="40"
          height="40"
        />
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
.men:hover {
  color: blue;
}

.women:hover {
  color: blue;
}
</style>
