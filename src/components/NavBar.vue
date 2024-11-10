<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">ASOS</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'products' }" class="nav-link active" aria-current="page"
              >WOMEN</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'products' }" class="nav-link active">MEN</router-link>
          </li>
        </ul>
        <div class="dropdown">
          <img
            src="https://i.pinimg.com/564x/26/d7/a7/26d7a73e700970b106225df8288ef0b7.jpg"
            alt="User Avatar"
            class="rounded-circle avatar dropdown-toggle"
            width="40"
            height="40"
            id="avatarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
            <li>
              <router-link :to="{ name: 'userInfo' }" class="dropdown-item">My Profile</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'account' }" class="dropdown-item">My Account</router-link>
            </li>
            <li><router-link :to="{ name: 'cart' }" class="dropdown-item">My Cart</router-link></li>
          </ul>
        </div>
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
