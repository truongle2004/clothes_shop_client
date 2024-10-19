<script setup>
import CardProduct from '@/components/CardProduct.vue'
</script>
<template>
  <div class="text-center">
    <h1>Topshop</h1>
  </div>
  <div class="menu-categories">
    <div class="colour">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Colour
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Black</button></li>
          <li><button class="dropdown-item" type="button">White</button></li>
          <li><button class="dropdown-item" type="button">Blue</button></li>
          <li><button class="dropdown-item" type="button">Green</button></li>
        </ul>
      </div>
    </div>
    <div class="size">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Size
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">XS</button></li>
          <li><button class="dropdown-item" type="button">XS-S</button></li>
          <li><button class="dropdown-item" type="button">S-M</button></li>
          <li><button class="dropdown-item" type="button">S</button></li>
        </ul>
      </div>
    </div>

    <div class="categories">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Jeans</button></li>
          <li><button class="dropdown-item" type="button">Shirts</button></li>
          <li><button class="dropdown-item" type="button">Dresses</button></li>
          <li><button class="dropdown-item" type="button">Footwear</button></li>
        </ul>
      </div>
    </div>
    <div class="discount">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Discount
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">20%-30%</button></li>
          <li><button class="dropdown-item" type="button">40%-50%</button></li>
          <li><button class="dropdown-item" type="button">50%-60%</button></li>
          <li><button class="dropdown-item" type="button">60%-70%</button></li>
          <li><button class="dropdown-item" type="button">70%-80%</button></li>
        </ul>
      </div>
    </div>
    <div class="sort">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Price high to low</button></li>
          <li><button class="dropdown-item" type="button">Price low to high</button></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="list-products">
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
  </div>
</template>
<style scoped>
.menu-categories {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px 10px;
  background-color: #f0f8ff;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.dropdown-toggle {
  width: 200px;
}

.list-products {
  display: flex;
  flex-wrap: wrap;
}
</style>
