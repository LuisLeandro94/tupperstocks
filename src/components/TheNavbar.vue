<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  tagline: {
    type: String,
    required: true,
  },
})
const navList = ref([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Products',
    path: '/products',
  },
])
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/Tupperware-Logo.png" alt="" width="100" />
      </RouterLink>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>
      <div class="navbar-end">
        <div v-for="navItem in navList" class="navbar-item" :key="`nav-${navItem.name}`">
          <RouterLink :to="navItem.path">{{ navItem.name }}</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-item img {
  max-height: 5rem !important;
}
</style>
