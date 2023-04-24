<template>
  <div class="product-detail-page">
    <h1>Product Detail Page</h1>
    <p>Product ID: {{ route.params.productId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style>
</style>