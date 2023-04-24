<script setup lang="ts">
import NewProductForm from '../components/NewProductForm.vue'
import ProductCard from '../components/ProductCard.vue'
import SideMenu from '../components/SideMenu.vue'
import { onMounted, ref } from 'vue'
import type { Product } from '@/types'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/ProductStore'

/*
 * Product related stuff
 */

const productStore = useProductStore()
const productList = storeToRefs(productStore).list.value

const filteredProductList = computed((): Product[] => {
  return productList.filter((product) => {
    if (product.name) {
      return product.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return productList
    }
  })
})

const addProduct = (payload: Product) => {
  productStore.addProduct(payload)
  hideForm()
}

/*
 * New Form Module
 */

const filterText = ref('')

const showNewForm = ref(false)

const searchFilter = (event: KeyboardEvent) => {
  filterText.value = (event.target as HTMLInputElement).value
}

const hideForm = () => {
  showNewForm.value = false
}

onMounted(() => {
  const route = useRoute()

  if (route.query.new) {
    showNewForm.value = true
  }
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Main Content -->
      <div class="column">
        <h1 class="title">Products</h1>

        <!-- CTA Bar -->
        <nav v-if="!showNewForm" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ productStore.numberOfProducts }}</strong> products
              </p>
            </div>

            <p class="level-item">
              <button @click="showNewForm = true" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Product name"
                    :value="filterText"
                    @keyup.enter="searchFilter"
                  />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Product Form -->
        <NewProductForm v-if="showNewForm" @add-new-product="addProduct" @cancel-new-product="hideForm" />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredProductList" class="column is-full" :key="`item-${item}`">
            <ProductCard :product="item" @delete-product="productStore.deleteProduct" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
