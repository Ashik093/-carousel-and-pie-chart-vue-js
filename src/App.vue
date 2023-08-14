<script setup>

</script>

<template>
  <section>
    <header>

      <div style="margin-bottom: 20px;">
        <router-link to="/" style="margin-left: 10px;color:blue" exact-active-class="active">Pie Chart</router-link>
        <router-link to="/carousel" style="margin-left: 10px;color:blue" exact-active-class="active">Carousel</router-link>
      </div>
    </header>
  
    <main>
      <router-view></router-view>
    </main>
  </section>
</template>

<style scoped>

.active {
  font-weight: bold;
  background-color: black;
  color: white !important;
  padding: 10px; /* Customize the active link color */
}
</style>
