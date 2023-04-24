<script setup lang="ts">
import type { Product } from '@/types'
import { useRouter } from 'vue-router'

type PropTypes = {
  product: Product
}
const props = defineProps<PropTypes>()
const router = useRouter()

const emits = defineEmits<{ (e: 'delete-product', product: Product): void }>()

const deleteProduct = () => {
  emits('delete-product', props.product)
}

const editProduct = () => {
  router.push(`/products/${props.product.productId}`)
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img :src="product.image" width="150" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ product.name }}
        </p>
        <p class="is-spaced mb-6">
          {{ product.description }}
        </p>
        <p class="is-4 is-spaced mb-1">
          Preço: <span class="title is-6"> {{ product.price }}€</span>
        </p>
        <p class="is-4 is-spaced mb-1">
          Stock: <span class="title is-6"> {{ product.stock }}un</span>
        </p>
      </div>
      <div class="is-flex is-flex-direction-column">
        <button @click="deleteProduct" class="button is-small is-danger is-light mb-2">Delete</button>
        <button @click="editProduct" class="button is-small is-info is-light">Edit</button>
      </div>
    </div>
  </article>
</template>

<style>
</style>
