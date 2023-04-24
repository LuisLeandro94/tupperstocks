<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Product } from '@/types'

const emit = defineEmits<{
  (e: 'add-new-product', product: Product): void
  (e: 'cancel-new-product'): void
}>()

const newProduct = ref<Product>({
  productId: uuidv4(),
  name: '',
  description: '',
  price: 0,
  image: '',
  category: '',
  stock: 0,
})

const addProduct = () => {
  emit('add-new-product', newProduct.value)
}

const cancelNewProduct = () => {
  emit('cancel-new-product')
}

const elNameInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  elNameInput.value?.focus()
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            v-model="newProduct.name"
            type="text"
            class="input is-large"
            placeholder="Mystery Flavored Shrimp"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addProduct" class="button is-success">Create</button>
          <button @click="cancelNewProduct" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
