<script setup lang="ts">

import { useToast } from "vue-toastification";

const cafes = [
    {id: 1, name: "황인태카페", prize: 100_000},
    {id: 2, name: "", prize: 20_000},
    {id: 3, name: "", prize: 30_000},
    {id: 4, name: "", prize: 40_000},
]

const toast = useToast()
const test = (name: String) => {
  toast.info(`${name}이 주문되었습니다.`)
}

</script>

<template>
  <header>
    <p>메뉴</p>
  </header>
  <body>
    <div class="list-group" v-for="menu in cafes" :key="menu.id">
      <a @click="test(menu.name)" href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ menu.name }}</h5>
          <small>{{ menu.id }}</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>{{ menu.prize }}</small>
      </a>
    </div>
  </body>

  
    
</template>